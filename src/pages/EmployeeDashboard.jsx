import AssetAllocationChart from "../components/AdminPageComponents/AssetAllocationChart.jsx";
import MetricsDashboard from "../components/AdminPageComponents/MetricsDashboard.jsx";
import EmployeeNavbar from "../components/EmployeePageComponents/EmployeeNavbar.jsx"
import EmployeeDashboardFooter from "../components/EmployeePageComponents/EmployeeSashboardFooter.jsx";

const EmployeeDashboard = () => {
  return (
    <>
      <EmployeeNavbar />
      <MetricsDashboard />
      <AssetAllocationChart />
      <EmployeeDashboardFooter />
    </>
  )
}

export default EmployeeDashboard;