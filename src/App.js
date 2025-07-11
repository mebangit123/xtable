import { useState } from "react";


const tableData = 
[
    { date: "2025-09-01", views: 100, article: "Article 1" },

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]


function App() {
  const [sortedData, setSortedData] = useState(tableData);

  const sortTableByDate = () => {
    setSortedData((prev) => [...prev].sort((a, b) => new Date(a.date) - new Date(b.date)));
  }
  const sortTableByViews = () => {
    setSortedData((prev) => [...prev].sort((a, b) => a.views - b.views));
  }
  return (
    <div style={{marginLeft: 100}}>
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={sortTableByDate}>Sort by Date</button>
        <button onClick={sortTableByViews}>Sort by Views</button>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((ele, id) => (
              <tr key={id}>
                <td>{ele.date}</td>
                <td>{ele.views}</td>
                <td>{ele.article}</td>                             
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
