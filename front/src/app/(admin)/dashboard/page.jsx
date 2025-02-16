'use client';

import '$style/bootstrap.min.css'
import "$style/admin/Admin.css"
import Management from "$component/dashboard/Management/Management";
import LatestActions from "$component/dashboard/LatestActions/LatestActions";
import dynamic from 'next/dynamic';
const Bootstrap = dynamic(() => import('$component/guides/Bootstrap/Bootstrap'), { ssr: false });

export default function AdminPage() {
  return (
    <>
      <main className="main">
        <div className="main__columns container-lg mt-5">
          <div className="main__column lead-column">
            <Management />
          </div>
        </div>
        <Bootstrap/>
      </main>
    </>
  );
}