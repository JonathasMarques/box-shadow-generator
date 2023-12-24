class BoxShadowgenerator {

    constructor(
        horizontal, 
        horizontalRef, 
        vertical,
        verticalRef, 
        blur,
        blurRef,
        spread,
        spreadRef,
        previewBox,
        rule,
        webkitRule,
        mozRule
    )  {
            this.horizontal = horizontal
            this.horizontalRef = horizontalRef
            this.vertical = vertical
            this.verticalRef = verticalRef
            this.blur = blur
            this.blurRef = blurRef
            this.spread = spread
            this.spreadRef = spreadRef
            this.previewBox = previewBox
            this.rule = rule
            this.webkitRule = webkitRule
            this.mozRule = mozRule
        }
    
    initialize() {

        this.horizontalRef.value = this.horizontal.value;
        this.verticalRef.value = this.vertical.value;
        this.spreadRef.value = this.spread.value;
        this.blurRef.value = this.blur.value;

        this.applyRule();
        this.showRule();
    }

    applyRule() {

        this.previewBox.style.boxShadow = `${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px #000`
        this.currentRule = this.previewBox.style.boxShadow;
    }

    showRule() {
        this.rule.innerText = this.currentRule;
        this.webkitRule.innerText = this.currentRule;
        this.mozRule.innerText = this.currentRule;
    }

};


// seleção de elementos 

const horizontal = document.querySelector("#horizontal");
const horizontalRef = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");
const vericalRef = document.querySelector("#vertical-value");
const  blur = document.querySelector("#blur");
const blurRef = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");
const spreadRef = document.querySelector("#spread-value");

const previewBox = document.querySelector("#box");

const rule = document.querySelector("#rule span");
const webkitRule = document.querySelector("#webkit-rule span");
const mozRule = document.querySelector("#moz-rule span");

const boxShadow = new BoxShadowgenerator (
    horizontal, 
    horizontalRef, 
    vertical,
    vericalRef, 
    blur,
    blurRef,
    spread,
    spreadRef,
    previewBox,
    rule,
    webkitRule,
    mozRule
);

boxShadow.initialize();
// eventos