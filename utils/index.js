export const getRandom = (num) => Math.ceil(Math.random() * num);

export const createElement = (tag, className) => {
    const $tag = document.createElement(tag);
    if (className) { //クラスを作成するための条件を設定します。クラスが渡された場合のみ関数がクラスを作成するようにします。
        $tag.classList.add(className);
    }
    return $tag;
}

export const getTime = () => {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`
}


export function createReloadButton() {
    const $reloadWrap = createElement('div', 'reloadWrap'); // 要素を作成し、それにクラスを追加します
    const $reloadBbutton = createElement('button', 'button');

    $reloadBbutton.innerText = 'Restart';
    $reloadWrap.appendChild($reloadBbutton);
    $arenas.appendChild($reloadWrap);
    $reloadBbutton.addEventListener('click', function () {
        window.location.reload();
    });
}