import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Layout = ({ children }) => {
  return (
    <div className="px-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-6xl font-bold gradient-title">Industry Insights</h1>
      </div>
      <Suspense fallback={<DashboardSkeleton />}>{children}</Suspense>
    </div>
  );
};

export default Layout;

function DashboardSkeleton() {
  return (
    <div className="p-6 space-y-6">
      {/* Last Updated */}
      <div className="flex justify-start">
        <Skeleton className="h-6 w-40 rounded-md" />
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Skeleton className="h-24 w-full rounded-lg" />
        <Skeleton className="h-24 w-full rounded-lg" />
        <Skeleton className="h-24 w-full rounded-lg" />
        <Skeleton className="h-24 w-full rounded-lg" />
      </div>

      {/* Salary Ranges Graph */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-56 rounded-md" />
        <Skeleton className="h-80 w-full rounded-lg" />
      </div>
    </div>
  );
}
