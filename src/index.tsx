import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Industries } from "./screens/Industries";
import { Pricing } from "./screens/Pricing";
import { Contact } from "./screens/Contact";
import { RequestDemo } from "./screens/RequestDemo";
import { ImproveCustomerSatisfaction } from "./screens/ImproveCustomerSatisfaction";
import { ImproveEmployeePerformance } from "./screens/ImproveEmployeePerformance";
import { ImproveSupplierPerformance } from "./screens/ImproveSupplierPerformance";
import { ImproveEfficiency } from "./screens/ImproveEfficiency";
import { ImproveDataVisibility } from "./screens/ImproveDataVisibility";
import { Banking } from "./screens/Banking";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request-a-demo" element={<RequestDemo />} />
        <Route path="/improve-customer-satisfaction" element={<ImproveCustomerSatisfaction />} />
        <Route path="/improve-employee-performance" element={<ImproveEmployeePerformance />} />
        <Route path="/improve-supplier-performance" element={<ImproveSupplierPerformance />} />
        <Route path="/improve-efficiency" element={<ImproveEfficiency />} />
        <Route path="/improve-data-visibility" element={<ImproveDataVisibility />} />
        <Route path="/banking" element={<Banking />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
