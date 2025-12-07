import { useEffect, useState } from "react";
import styled from "styled-components";
import { getOrders, deleteOrder, updateOrder } from "../services/api";

const Table = styled.table`
  width: 100%;
  margin-top: 40px;
  border-radius: 12px;
  overflow: hidden;
  background: ${({ dark }) => (dark ? "#111" : "#fff")};
  box-shadow: 0 8px 26px rgba(0,0,0,0.08);

  th, td {
    padding: 16px;
    text-align: right;
    border-bottom: 1px solid ${({ dark }) => (dark ? "#222" : "#eee")};
  }

  th {
    background: ${({ dark }) => (dark ? "#161616" : "#f7f7f7")};
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const Status = styled.span`
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13px;
  color: white;

  background: ${({ st }) =>
    st === "pending" ? "#f59e0b" :
    st === "in-progress" ? "#3b82f6" :
    st === "done" ? "#10b981" :
    st === "canceled" ? "#ef4444" :
    "#6b7280"
  };
`;

const ActionBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  margin-left: 10px;

  &:hover {
    opacity: 0.7;
  }
`;

export default function OrdersTable({ dark }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOrders = async () => {
    setLoading(true);
    const data = await getOrders();
    setOrders(data);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("حذف شود؟")) return;
    await deleteOrder(id);
    loadOrders();
  };

  const changeStatus = async (id, newStatus) => {
    await updateOrder(id, { status: newStatus });
    loadOrders();
  };

  useEffect(() => {
    loadOrders();
  }, []);

  if (loading) return <p style={{ marginTop: 20 }}>در حال بارگذاری...</p>;

  return (
    <Table dark={dark}>
      <thead>
        <tr>
          <th>نام مشتری</th>
          <th>نوع پروژه</th>
          <th>هزینه</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((o) => (
          <tr key={o._id}>
            <td>{o.customerName}</td>
            <td>{o.type}</td>
            <td>{o.budget ? o.budget.toLocaleString() + " تومان" : "-"}</td>

            <td>
              <Status st={o.status}>{o.status}</Status>
            </td>

            <td style={{ display: "flex", gap: "10px" }}>
              <ActionBtn onClick={() => changeStatus(o._id, "in-progress")}>🔧</ActionBtn>
              <ActionBtn onClick={() => changeStatus(o._id, "done")}>✔</ActionBtn>
              <ActionBtn onClick={() => changeStatus(o._id, "canceled")}>✖</ActionBtn>
              <ActionBtn onClick={() => handleDelete(o._id)}>🗑</ActionBtn>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}