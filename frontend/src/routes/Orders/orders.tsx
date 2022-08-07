import useOrderQuery from "./useOrderQuery";

export default function Orders() {
  const { data: orders, isSuccess } = useOrderQuery();
  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Номер заказа
              </th>
              <th scope="col" className="py-3 px-6">
                Товар
              </th>
              <th scope="col" className="py-3 px-6">
                Количество
              </th>
            </tr>
          </thead>
          <tbody>
            {isSuccess &&
              orders?.["hydra:member"].map((order) => (
                <tr className="bg-white border-b ">
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {order.id}
                  </td>
                  <td className="py-4 px-6">
                    {order.goods?.map((goodsItem) => `${goodsItem.name}`)}
                  </td>
                  <td className="py-4 px-6">{order.quantity}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
