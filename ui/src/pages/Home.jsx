import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="rounded-lg">
      <div className="bg-gray-300 h-screen shadow flex overflow-auto rounded-lg">
        <table className="border-0 border-b-gray-500 rounded-4xl w-[75rem] m-auto mt-10">
          <thead className="bg-stone-700 text-white">
            <tr className=" border-stone-900 text-left">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Topics</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2 ">% Remaining</th>
              <th className="px-4 py-2 text-right">% Completed</th>
            </tr>
          </thead>
          <tbody className="bg-stone-400 ">
            <tr className="border-b border-gray-100 hover:bg-stone-200">
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">2025-04-23</td>
                <td className="text-sm  px-4 py-2">Complete Web App
                        <ol>
                            <li>* components</li>
                            <li>* Pages</li>
                        </ol>
                </td>
                <td className="px-4  py-2">In Progress</td>
                <td className="px-4 py-2 font-extrabold text-red-700">50%</td>
                <td className="px-4 py-2 text-right font-extrabold text-green-600">50%</td>


            </tr>
            <tr className="border-b border-gray-100 hover:bg-stone-200">
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">2025-04-23</td>
                <td className="text-sm px-4 py-2">Complete Web App
                        <ol>
                            <li>* controllers</li>
                            <li>* Routes</li>
                        </ol>
                </td>
                <td className="px-4 py-2">In Progress</td>
                <td className="px-4 py-2 font-extrabold text-red-700">90%</td>
                <td className="px-4 py-2 uppercase font-bold text-green-600 text-right">10%</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>

    </div>
  );
}

export default Home;
