export const $arenas = document.querySelector('.arenas');
export const $chat = document.querySelector('.chat');
export const $formFight = document.querySelector('.control');



export const HIT = {
    head: 60, //30
    body: 65, //25
    foot: 50, //20
}

export const ATTACK = ['head', 'body', 'foot'];

export const LOGS = {

    start: '[time]は[player1]と[player2]が挑戦したときの[時刻]を示していました。',
    end: [
        'ヒットの結果 [playerWins]: [playerLose] - 死体',
        '[playerLose] は [playerWins] の一撃により死亡しました',
        '戦闘結果: [playerLose] - 被害者、[playerWins] - キラー',
    ],
    hit: [
        '[playerDefence] は集中しようとしましたが、[playerKick] は逃げ出し、尾てい骨で敵の左耳を潰しました。',
        '[playerDefence] は、突然、予期せず、[playerKick] が誤って胸で相手の胸骨を押しつぶしたとき、動揺しました。',
        '[playerDefence]は目を閉じ、そのとき[playerKick]は涙を流しながら、拳で相手の股間を押し潰した。',
        '[playerDefence] が <検閲済み😁> を引っ掻くと、突然、ひるむことのない [playerKick] が胸で相手の左上腕二頭筋を必死に打ち砕きました。',
        '[playerDefence] は考えていましたが、突然 [playerKick] が誤って尾てい骨を相手のベルトに叩きつけてしまいました。',
        '[playerDefence] は歯を食いしばっていましたが、[playerKick] が目を覚まし、指で敵の喉仏に強烈な一撃を加えました。',
        '[playerDefence] は重要なことを思い出しましたが、突然 [playerKick] があくびをして、開いた手のひらで相手の顎を押しつぶしました。',
        '[playerDefence]が周囲を見回したその時、[playerKick]は何気なく相手の虫垂を足で潰した。',
        '[playerDefence] は咳き込みましたが、突然 [playerKick] が指を見せて相手の胸を指で叩きました。',
        '[playerDefence] が何か言おうとしたとき、残酷な [playerKick] が目を覚まし、尾てい骨で相手の左足を打ち砕きました。',
        '[playerDefence] は、突然、狂気の [playerKick] が退屈から相手の左側に膝を叩きつけたときのことを忘れていました。',
        '[playerDefence] は窒息し、これに対して [playerKick] は何気なく膝で敵のこめかみを潰しました。',
        '[playerDefence] は動揺し、そのとき生意気な [playerKick] はよろめき、尾てい骨で相手の唇を潰しました。',
        '[playerDefence] は周囲を見回しましたが、突然 [playerKick] が恐る恐る膝で相手の左目を打ち砕きました。',
        '[playerDefence]が周囲を見回すと、[playerKick]が肩で強烈な一撃を放ち、普段相手が当たらないブロックを突破した。',
        '[playerDefence] が歯を食いしばっていたとき、突然、予期せず、[playerKick] が肩で相手の腹筋を必死に打ち砕きました。',
        '[playerDefence] は我に返り、このとき [playerKick] はブロックを突破して相手のすねに手で破壊的な打撃を加えました。',
        '[playerDefence] はよろめき、そのとき [playerKick] は笑いながら、開いた手のひらで敵の太ももを叩きつけました。',
    ],
    defence: [
        '[playerKick] は勢いを失い、勇敢な [playerDefence] は鎖骨へのオープンパームストライクから飛び降りました。',
        '[playerKick] が状況をコントロールできなかったため、[playerDefence] が右胸へのヒールストライクをブロックしました。',
        '[playerKick] は勢いを失い、[playerDefence] が脾臓への膝打ちをブロックしました。',
        '[playerKick] が滑って、思慮深い [playerDefence] が眉間の頭突きをブロックしました。',
        '[playerKick] がパンチを放とうとしたが、無敵の [playerDefence] が尾骨をかかとで当ててその打撃を避けた。',
        '[playerKick] は騙され、残酷な [playerDefence] がみぞおちへのキックをブロックしました。',
        '[playerKick] は戦いのことを考えていなかったので、イライラした [playerDefence] は、通常は当たらない場所に拳で打撃から飛び降りました。',
        '[playerKick] は騙され、残酷な [playerDefence] がみぞおちへのキックをブロックしました。'
    ],
    draw: '引き分けでも勝利です！'
};