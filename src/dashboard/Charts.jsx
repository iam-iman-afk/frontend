import styled from "styled-components";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement, Tooltip, Legend,
  CategoryScale, LinearScale,
  LineElement, PointElement
);

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 25px;
  margin-top: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default function Charts({ dark }) {
  return (
    <Wrapper>
      <Line
        data={{
          labels: ["فروردین", "اردیبهشت", "خرداد", "تیر"],
          datasets: [
            {
              label: "بازدید",
              data: [1200, 1800, 1500, 2400],
              borderColor: "#ff6a3d",
              backgroundColor: "rgba(255,106,61,0.2)",
            },
          ],
        }}
      />

      <Pie
        data={{
          labels: ["لندینگ", "فروشگاهی", "شرکتی"],
          datasets: [
            {
              data: [40, 35, 25],
              backgroundColor: ["#ff6a3d", "#ffb84c", "#7b2ff7"],
            },
          ],
        }}
      />
    </Wrapper>
  );
}