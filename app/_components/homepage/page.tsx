import CardTrend from "./card-trending/CardTrend";
import CardPost from "./card-post/CardPost";

export default function RootLayout() {
  return (
    <div>
      <div className="mt-2 mb-6">
        <CardTrend />
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <CardPost />
        </div>
        <div className="col-span-1 border-2"></div>
      </div>
    </div>
  );
}
