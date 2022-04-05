import FrontendSamurai from "~/components/frontend-samurai";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div className="flex justify-center">
        <FrontendSamurai width={"680"} height={"680"} />
      </div>
    </div>
  );
}
