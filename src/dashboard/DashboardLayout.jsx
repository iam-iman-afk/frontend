import styled from "styled-components";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const Main = styled.div`
  flex: 1;
  background: ${({ dark }) => (dark ? "#0d0d0d" : "#f5f5f5")};
  color: ${({ dark }) => (dark ? "#fff" : "#111")};
  overflow-y: auto;
  height: 100vh;
  padding-bottom: 40px;
  transition: 0.25s;
`;

export default function DashboardLayout({ dark, children }) {
  return (
    <Layout>
      <Sidebar dark={dark} />
      <Main dark={dark}>
        <Topbar dark={dark} />
        {children}
      </Main>
    </Layout>
  );
}