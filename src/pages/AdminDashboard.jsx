import AdminDashboardFooter from '../components/AdminPageComponents/AdminDashboardFooter.jsx';
import AdminNavbar from '../components/AdminPageComponents/AdminNavbar.jsx';
import AssetAllocationChart from '../components/AdminPageComponents/AssetAllocationChart.jsx';
import CashFlowSummary from '../components/AdminPageComponents/CashFlowSummary.jsx';
import ExpenseBarChart from '../components/AdminPageComponents/ExpenseBarChart.jsx';
import KpiSection from '../components/AdminPageComponents/KpiSection.jsx';
import MetricsDashboard from '../components/AdminPageComponents/MetricsDashboard.jsx';
import RevenueAreaChart from '../components/AdminPageComponents/RevenueAreaChart.jsx';
import TransactionsTable from '../components/AdminPageComponents/TransactionTable.jsx';

const AdminDashboard = () => {
  return (
    <>
      <div>
        <AdminNavbar />
        <MetricsDashboard />
        <div className="p-4 space-y-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RevenueAreaChart />
            <ExpenseBarChart />
          </div>
        </ div>
        <TransactionsTable />
        <AssetAllocationChart />
        <CashFlowSummary />
        <KpiSection />
        <AdminDashboardFooter />
      </div>
    </>
  )
}

export default AdminDashboard;