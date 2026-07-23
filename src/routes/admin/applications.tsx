import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getApplicationsFn, updateApplicationStatusFn, Application } from "../../server/actions/admin-applications";
import { toast } from "sonner";
import { useState } from "react";
import { Check, X, Loader2 } from "lucide-react";

export const Route = createFileRoute("/admin/applications")({
  component: AdminApplications,
});

function AdminApplications() {
  const queryClient = useQueryClient();
  const [loadingRow, setLoadingRow] = useState<number | null>(null);
  
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["admin-applications"],
    queryFn: () => getApplicationsFn(),
  });

  const updateStatusMutation = useMutation({
    mutationFn: updateApplicationStatusFn,
    onSuccess: (res) => {
      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: ["admin-applications"] });
      setLoadingRow(null);
    },
    onError: (err: any) => {
      toast.error(err.message || "An error occurred");
      setLoadingRow(null);
    },
  });

  const handleAction = (app: Application, action: "Accepted" | "Rejected") => {
    if (confirm(`Are you sure you want to mark ${app.name} as ${action}? This will send an automated email.`)) {
      setLoadingRow(app.rowNumber);
      updateStatusMutation.mutate({
        rowNumber: app.rowNumber,
        status: action,
        name: app.name,
        email: app.email,
        role: app.role,
      });
    }
  };

  return (
    <div className="min-h-screen bg-black/95 text-white/90 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Job Applications</h1>
          <p className="text-white/60 mt-2">Manage candidates and trigger automated emails via Resend.</p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : isError ? (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl">
            Failed to load applications: {error.message}
          </div>
        ) : !data?.applications.length ? (
          <div className="text-center py-20 text-white/50 bg-white/5 rounded-2xl border border-white/10">
            No applications found in the Google Sheet.
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5">
            <table className="w-full text-left text-sm text-white/80">
              <thead className="text-xs uppercase bg-white/5 border-b border-white/10 text-white/60">
                <tr>
                  <th scope="col" className="px-6 py-4">Date</th>
                  <th scope="col" className="px-6 py-4 font-medium text-white">Applicant Name</th>
                  <th scope="col" className="px-6 py-4">Role</th>
                  <th scope="col" className="px-6 py-4">Contact</th>
                  <th scope="col" className="px-6 py-4">Status</th>
                  <th scope="col" className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.applications.map((app) => (
                  <tr key={app.rowNumber} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">{app.date.split("T")[0] || app.date}</td>
                    <td className="px-6 py-4 font-medium text-white">{app.name}</td>
                    <td className="px-6 py-4">{app.role}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <a href={`mailto:${app.email}`} className="text-primary hover:underline">{app.email}</a>
                        <span className="text-xs text-white/50">{app.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        app.status === 'Accepted' ? 'bg-green-500/20 text-green-400 border border-green-500/20' :
                        app.status === 'Rejected' ? 'bg-red-500/20 text-red-400 border border-red-500/20' :
                        'bg-yellow-500/20 text-yellow-400 border border-yellow-500/20'
                      }`}>
                        {app.status || 'Pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        {app.status === "Pending" ? (
                          <>
                            <button
                              onClick={() => handleAction(app, "Accepted")}
                              disabled={loadingRow === app.rowNumber}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/20 rounded-lg transition-colors disabled:opacity-50"
                            >
                              {loadingRow === app.rowNumber ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
                              Accept
                            </button>
                            <button
                              onClick={() => handleAction(app, "Rejected")}
                              disabled={loadingRow === app.rowNumber}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 rounded-lg transition-colors disabled:opacity-50"
                            >
                              {loadingRow === app.rowNumber ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <X className="w-3.5 h-3.5" />}
                              Reject
                            </button>
                          </>
                        ) : (
                          <span className="text-xs text-white/40 italic">Action taken</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
