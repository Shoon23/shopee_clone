import React from "react";

interface Props {
  selected: number;
}

const SellerProductList: React.FC<Props> = ({ selected }) => {
  return (
    <div className="px-6">
      <div className="mb-2 flex justify-between">
        <div className="">0 Product</div>
        {selected == 1 && (
          <button className="rounded-md bg-orange-600 p-2 text-white hover:bg-orange-700">
            + Add Products
          </button>
        )}
      </div>
      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Product Name</th>
              <th>Variations</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge-ghost badge badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn-ghost btn-xs btn">details</button>
              </th>
              <th className="flex gap-1">
                <button className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600">
                  Update
                </button>
                <button className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                  Delete
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerProductList;
