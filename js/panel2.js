// 보여지는 페이지 갯수 조정
let currentPage = 1;
const rowsPerPage = 5;

// 가상 데이터 배열
const data = [
  {
    id: "20300",
    company: "마담",
    path: "아이브",
    cate: "2025TNK",
    uniqueid: "e42342342liwerowierjlxdkvlkdsruwetl2322342342342342342345kd",
    date: "2024.11.15",
    check: "실적체크요청",
  },
  {
    id: "20300",
    company: "마담",
    path: "아이브",
    cate: "2025TNK",
    uniqueid: "e42342342liwerowierjlxdkvlkdsruwetl2322342342342342342345kd",
    date: "2024.11.15",
    check: "실적체크요청",
  },
  {
    id: "20300",
    company: "마담",
    path: "아이브",
    cate: "2025TNK",
    uniqueid: "e42342342liwerowierjlxdkvlkdsruwetl2322342342342342342345kd",
    date: "2024.11.15",
    check: "실적체크요청",
  },
  {
    id: "20300",
    company: "마담",
    path: "아이브",
    cate: "2025TNK",
    uniqueid: "e42342342liwerowierjlxdkvlkdsruwetl2322342342342342342345kd",
    date: "2024.11.15",
    check: "실적체크요청",
  },
  {
    id: "20300",
    company: "마담",
    path: "아이브",
    cate: "2025TNK",
    uniqueid: "e42342342liwerowierjlxdkvlkdsruwetl2322342342342342342345kd",
    date: "2024.11.15",
    check: "실적체크요청",
  },
  {
    id: "20300",
    company: "마담",
    path: "아이브",
    cate: "2025TNK",
    uniqueid: "e42342342liwerowierjlxdkvlkdsruwetl2322342342342342342345kd",
    date: "2024.11.15",
    check: "실적체크요청",
  },
  {
    id: "20300",
    company: "마담",
    path: "아이브",
    cate: "2025TNK",
    uniqueid: "e42342342liwerowierjlxdkvlkdsruwetl2322342342342342342345kd",
    date: "2024.11.15",
    check: "실적체크요청",
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
        <td>${row.id}</td>
        <td>${row.company}</td>
        <td>${row.path}</td>
        <td>${row.cate}</td>
        <td>
        <div class="relative group">
            <span
            class="truncate inline-block max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap"
            >
            ${row.uniqueid}
            </span>
            <div
            class="absolute hidden group-hover:flex bg-black text-white text-sm rounded-md p-2 -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap shadow-lg z-10"
            >
            ${row.uniqueid}
            </div>
        </div>
        </td>
        <td>${row.date}</td>
        <td>
          <select class="form-select border-gray-300 rounded-md p-2">
            <option ${
              row.check === "실적체크요청" ? "selected" : ""
            }>실적체크요청</option>
            <option ${
              row.check === "실적재전송" ? "selected" : ""
            }>실적재전송</option>
            <option ${
              row.check === "실적이상없음" ? "selected" : ""
            }>실적이상없음</option>
          </select>
          <button class="status-btn bg-blue-500 text-white p-2 text-sm rounded-md mt-2" data-status="request">요청</button>
        </td>
      `;
    tableBody.appendChild(tr);
  });

  updatePagination(data.length);
}

// 버튼 이벤트 관리
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("status-btn")) {
    const button = event.target;

    // 상태 확인 (data-status 사용)
    const status = button.getAttribute("data-status");

    if (status === "request") {
      // 요청 상태 → 완료 상태로 변경
      button.setAttribute("data-status", "complete");
      button.textContent = "완료";
      button.classList.remove("bg-blue-500");
      button.classList.add("bg-gray-500");
    } else if (status === "complete") {
      // 완료 상태 → 요청 상태로 변경
      alert("이미 완료 처리되었습니다.");
    }
  }
});

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
