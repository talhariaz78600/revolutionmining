import React from 'react';
import ResetPassword from "@/components/auth/ResetPassword";
import { Suspense } from "react";
const page = () => {
  return (
    <div>
      <Suspense>
        <ResetPassword />
      </Suspense>
    </div>
  );
}

export default page;
