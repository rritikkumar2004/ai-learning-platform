async function askAI() {
    let question = document.getElementById("question").value;

    let res = await fetch("http://localhost:5000/ask", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
    });

    let data = await res.json();
    document.getElementById("response").innerText = data.answer;
}