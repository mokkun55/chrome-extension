const userNameSelector = "[data-testid='UserName']";

const div = document.createElement("div");
div.innerHTML = `
  <button id="viewBtn">メディアビュアー</button>
`;
div.style.cssText = `
  margin-left: auto;
`;

const viewButton = div.querySelector("#viewBtn");
viewButton.style.cssText = `
  background-color: #fff;
  border-radius: 9999px;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  margin-left: auto;
  font-weight: bold;
  cursor: pointer;
`;

const main = () => {
  // 特定の要素が存在するかどうかを確認するタイマーを設定
  const jsInitCheckTimer = setInterval(jsLoaded, 500);

  // 要素が読み込まれるかどうかを確認する関数
  function jsLoaded() {
    // 取得したい要素をセレクタで取得
    const targetElement = document.querySelector(userNameSelector);

    // 要素が見つかった場合の処理
    if (targetElement != null) {
      clearInterval(jsInitCheckTimer); // タイマーを停止
      console.log("要素が見つかりました");

      // ここに処理を書く
      // ボタンを追加
      targetElement.appendChild(div);

      // ボタンをクリックしたときの処理
      viewButton.addEventListener("click", () => {
        console.log("ボタンがクリックされました");
      });
    } else {
      console.count("要素がまだ見つかりません");
    }
  }
};

window.addEventListener("load", main, false);
