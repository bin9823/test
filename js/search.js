document.querySelector('.main1-search-icon').addEventListener('click', function(event) {
    event.preventDefault(); // 폼 제출을 방지
    const query = document.querySelector('.main1-input-area2').value.trim(); // 공백 제거
    console.log(query); // 검색어 확인

    const pageMapping = {
        "한식": "kindex.html",  // 현재 페이지와 같은 디렉토리
        "중식": "cindex.html",
        "일식": "jindex.html",
        "디저트": "dindex.html"
    };

    if (pageMapping[query]) {
        window.location.href = pageMapping[query]; // 상대 경로로 페이지 이동
    } else {
        alert('검색 결과가 없습니다.');
    }
});