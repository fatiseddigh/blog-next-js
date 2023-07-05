import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";
import routerPush from "@/utils/routerPush";
const CustomPagination = ({ page, totalPages }) => {
  const router = useRouter();
  const pageHandler = (e, page) => {
    router.query.page = page;
    routerPush(router);
  };
  return (
    <div className="col-span-9 flex justify-center mb-4 py-6">
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          color="primary"
          onChange={pageHandler}
        />
      )}
    </div>
  );
};

export default CustomPagination;
