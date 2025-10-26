import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { ImproveEmployeePerformance } from "./screens/ImproveEmployeePerformance";
import { ImproveSupplierPerformance } from "./screens/ImproveSupplierPerformance";
import { ImproveEfficiency } from "./screens/ImproveEfficiency";
import { ImproveDataVisibility } from "./screens/ImproveDataVisibility";
import { Banking } from "./screens/Banking";
import { BusinessServices } from "./screens/BusinessServices";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Banking />} />
        <Route path="/improve-employee-performance" element={<ImproveEmployeePerformance />} />
        <Route path="/improve-supplier-performance" element={<ImproveSupplierPerformance />} />
        <Route path="/improve-efficiency" element={<ImproveEfficiency />} />
        <Route path="/improve-data-visibility" element={<ImproveDataVisibility />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/business-services" element={<BusinessServices />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
