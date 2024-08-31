const div = document.createElement("div");
div.innerHTML = `
  <p>Hello, World!!</p>
`;

const main = () => {
  // 特定の要素が存在するかどうかを確認するタイマーを設定
  const jsInitCheckTimer = setInterval(jsLoaded, 500);

  // 要素が読み込まれるかどうかを確認する関数
  function jsLoaded() {
    // 取得したい要素をセレクタで取得
    const targetElement = document.querySelector("img");

    // 要素が見つかった場合の処理
    if (targetElement != null) {
      clearInterval(jsInitCheckTimer); // タイマーを停止
      console.log("要素が見つかりました");

      // ここに処理を書く
    } else {
      console.count("要素がまだ見つかりません");
    }
  }
};

window.addEventListener("load", main, false);
