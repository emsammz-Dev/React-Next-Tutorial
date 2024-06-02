import SideNav from '@/app/ui/dashboard/sidenav';

import { redirect } from 'next/navigation';

/* kinde libraries */
import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server';

 
export default async function Layout({ children }: { children: React.ReactNode }) {
  const {isAuthenticated} = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();
  
  if(!isLoggedIn){
    redirect('/api/auth/login');
  }
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}