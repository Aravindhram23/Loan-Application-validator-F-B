// pages/tasks.tsx
import Layout from "@/components/Layout";

const Tasks = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Tasks Page</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <p>This is where you can manage your tasks.</p>
      </div>
    </Layout>
  );
};

export default Tasks;
