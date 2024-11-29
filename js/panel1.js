// 보여지는 페이지 갯수 조정
let currentPage = 1;
const rowsPerPage = 5;

// 가상 데이터 배열
const data = [
  {
    name: "김*영",
    phone: "010-****-9553",
    status: 0,
    date: "2024.11.15",
    path: "아이브",
    id: "N_1168734157687",
  },
  {
    name: "이*영",
    phone: "010-****-9553",
    status: 0,
    date: "2024.11.15",
    path: "아이브",
    id: "N_1168734157687",
  },
  {
    name: "최*영",
    phone: "010-****-9553",
    status: 0,
    date: "2024.11.15",
    path: "아이브",
    id: "N_1168734157687",
  },
  {
    name: "김*영",
    phone: "010-****-9553",
    status: 0,
    date: "2024.11.15",
    path: "아이브",
    id: "N_1168734157687",
  },
  {
    name: "김*영",
    phone: "010-****-9553",
    status: 0,
    date: "2024.11.15",
    path: "아이브",
    id: "N_1168734157687",
  },
  {
    name: "김*영",
    phone: "010-****-9553",
    status: 0,
    date: "2024.11.15",
    path: "아이브",
    id: "N_1168734157687",
  },
  {
    name: "김*영",
    phone: "010-****-9553",
    status: 0,
    date: "2024.11.15",
    path: "아이브",
    id: "N_1168734157687",
  },
  {
    name: "김*영",
    phone: "010-****-9553",
    status: 0,
    date: "2024.11.15",
    path: "아이브",
    id: "N_1168734157687",
  },
  {
    name: "김*영",
    phone: "010-****-9553",
    status: 0,
    date: "2024.11.15",
    path: "아이브",
    id: "N_1168734157687",
  },
  {
    name: "김*영",
    phone: "010-****-9553",
    status: 0,
    date: "2024.11.15",
    path: "아이브",
    id: "N_1168734157687",
  },
  // ... (더 많은 데이터 추가)
];

// 데이터 렌더링
function renderTable(data, page = 1) {
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const tableBody = document.getElementById("table-body");

  tableBody.innerHTML = "";

  data.slice(start, end).forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.name}</td>
      <td>${row.phone}</td>
      <td>${row.status}</td>
      <td>${row.date}</td>
      <td>${row.path}</td>
      <td>${row.id}</td>
    `;
    tableBody.appendChild(tr);
  });

  updatePagination(data.length);
}

// 페이지네이션 업데이트
function updatePagination(totalItems) {
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const paginationContainer = document.getElementById("pagination");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  // 이전/다음 버튼 상태 업데이트
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;

  // 페이지 번호 렌더링
  paginationContainer.innerHTML = ""; // 기존 페이지 번호 초기화

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.className = `pagination-btn ${
      i === currentPage ? "active text-pcolor font-bold" : ""
    }`;
    pageButton.onclick = () => {
      currentPage = i;
      renderTable(data, currentPage);
    };
    paginationContainer.appendChild(pageButton);
  }

  // 이전 버튼 클릭 이벤트
  prevButton.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderTable(data, currentPage);
    }
  };

  // 다음 버튼 클릭 이벤트
  nextButton.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderTable(data, currentPage);
    }
  };
}

// 초기화 함수
export function init() {
  renderTable(data);
}
