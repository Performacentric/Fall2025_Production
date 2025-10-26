import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Home } from "./screens/Home";
import { ImproveEmployeePerformance } from "./screens/ImproveEmployeePerformance";
import { ImproveSupplierPerformance } from "./screens/ImproveSupplierPerformance";
import { ImproveEfficiency } from "./screens/ImproveEfficiency";
import { ImproveDataVisibility } from "./screens/ImproveDataVisibility";
import { ImproveCustomerSatisfaction } from "./screens/ImproveCustomerSatisfaction";
import { Banking } from "./screens/Banking";
import { BusinessServices } from "./screens/BusinessServices";
import { Pricing } from "./screens/Pricing";
import { Distribution } from "./screens/Distribution";
import { Manufacturing } from "./screens/Manufacturing";
import { Retail } from "./screens/Retail";
import { ImproveProfitability } from "./screens/ImproveProfitability";
import { WhatWeDo } from "./screens/WhatWeDo";
import { Industries } from "./screens/Industries";
import { RequestDemo } from "./screens/RequestDemo";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/improve-employee-performance" element={<ImproveEmployeePerformance />} />
        <Route path="/improve-supplier-performance" element={<ImproveSupplierPerformance />} />
        <Route path="/improve-efficiency" element={<ImproveEfficiency />} />
        <Route path="/improve-data-visibility" element={<ImproveDataVisibility />} />
        <Route path="/improve-customer-satisfaction" element={<ImproveCustomerSatisfaction />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/business-services" element={<BusinessServices />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/distribution" element={<Distribution />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/improve-profitability" element={<ImproveProfitability />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/request-a-demo" element={<RequestDemo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
