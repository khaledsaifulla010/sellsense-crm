import OrdersTable from "@/components/OrdersTable";
import { Orders as OrdersType } from "../../types";
import React from "react";
// Async function to fetch customer data from the API
async function getOrders(): Promise<OrdersType[]> {
  const res = await fetch("http://localhost:3000/api/orders");
  const data = await res.json();
  console.log(data.data);
  return data.data;
}

const Orders = async () => {
  const orders = await getOrders();
  console.log("inside orders =====> ", orders);
  return (
    <div>
      <div>
        <h1 className="text-xl font-bold mb-4">Orders</h1>
        {/* Pass the fetched customer data to the CustomersTable component as a prop */}
        <OrdersTable initialOrders={orders} />
      </div>
    </div>
  );
};

export default Orders;
