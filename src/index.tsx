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
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
