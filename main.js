var gQuests
var gCurrQuestIdx = 0
var btnClicked

function initGame() {
    renderQuest()

}



createQuests()
checkAnswer()


function createQuests() {
    gQuests = [
        { id: 1, opts: ['Thor', 'C.America', 'SpiderMan'], currectOptIndex: 0 },
        { id: 2, opts: ['Hulk', 'IronMan', 'C.America'], currectOptIndex: 0 },
        { id: 3, opts: ['C.America', 'Hulk', 'C.Marvel'], currectOptIndex: 0 }
    ]


}
function checkAnswer(btn) {

    if (btn === gQuests[gCurrQuestIdx].currectOptIndex) {
        console.log('Good !')

        gCurrQuestIdx++

    }
    if (gCurrQuestIdx === gQuests.length) {
        var elResetBtn = document.querySelector('.resetbtn')
        elResetBtn.style.display = 'block'
        alert('Victory !!!')
    }
    else {
        renderQuest()
    }


}


function renderQuest() {
    var elOpt = gQuests[gCurrQuestIdx]

    var strHTML = `<img class="img" src="imgs/${gCurrQuestIdx}.png" alt="">
    <div class="btn">
    `
    for (var i = 0; i < elOpt.opts.length; i++) {
        // console.log('i', i)
        strHTML += `
            <button class="curr-btn" onclick="checkAnswer(${i})">${elOpt.opts[i]}</button>
        `
    }
    strHTML += `
    <button class="resetbtn" onclick="resetBtn(this)">reset</button>
    </div>`

    // console.log('strHTML', strHTML)
    var bord = document.querySelector('.bord')
    bord.innerHTML = strHTML

}


function resetBtn(onBtn) {

    onBtn.style.display = 'block'
    gCurrQuestIdx = 0
    renderQuest()


}