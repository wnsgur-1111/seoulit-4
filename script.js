/* ============ 데이터 ============ */

const QUESTIONS = [
  // E / I
  { axis:"EI", text:"주말에 에너지를 채우는 방법은?", a:{t:"E", text:"사람들과 어울리며 활력을 얻는다"}, b:{t:"I", text:"혼자만의 시간으로 재충전한다"} },
  { axis:"EI", text:"새로운 모임에 가면 나는", a:{t:"E", text:"먼저 다가가 말을 건다"}, b:{t:"I", text:"분위기를 살피며 천천히 다가간다"} },
  { axis:"EI", text:"생각을 정리할 때", a:{t:"E", text:"말하면서 생각이 정리된다"}, b:{t:"I", text:"혼자 곱씹은 후에 말한다"} },
  { axis:"EI", text:"파티가 끝난 뒤 나는", a:{t:"E", text:"오히려 더 신이 난다"}, b:{t:"I", text:"완전히 지쳐서 쉬고 싶다"} },
  { axis:"EI", text:"이상적인 하루는", a:{t:"E", text:"여러 사람과 다양한 활동을 하는 날"}, b:{t:"I", text:"소수의 사람 혹은 혼자 보내는 조용한 날"} },

  // S / N
  { axis:"SN", text:"설명을 들을 때 더 편한 방식은?", a:{t:"S", text:"구체적인 사실과 예시"}, b:{t:"N", text:"큰 그림과 가능성"} },
  { axis:"SN", text:"나는 대체로", a:{t:"S", text:"현실적이고 실용적이다"}, b:{t:"N", text:"상상력이 풍부하고 아이디어가 많다"} },
  { axis:"SN", text:"새로운 일을 배울 때", a:{t:"S", text:"검증된 방법을 차근차근 따른다"}, b:{t:"N", text:"패턴을 파악해 나만의 방식을 찾는다"} },
  { axis:"SN", text:"대화 중 더 흥미로운 주제는", a:{t:"S", text:"지금 일어나는 실제 일들"}, b:{t:"N", text:"미래에 대한 상상과 이론"} },
  { axis:"SN", text:"문제를 해결할 때", a:{t:"S", text:"과거 경험과 사실에 기반한다"}, b:{t:"N", text:"직관과 새로운 관점에 기댄다"} },

  // T / F
  { axis:"TF", text:"중요한 결정을 내릴 때 우선하는 것은?", a:{t:"T", text:"논리와 객관적 기준"}, b:{t:"F", text:"사람들의 감정과 관계"} },
  { axis:"TF", text:"친구가 고민을 털어놓으면", a:{t:"T", text:"원인을 분석하고 해결책을 제시한다"}, b:{t:"F", text:"먼저 마음에 공감해준다"} },
  { axis:"TF", text:"비판을 받을 때 나는", a:{t:"T", text:"내용이 타당한지부터 따진다"}, b:{t:"F", text:"먼저 감정적으로 영향을 받는다"} },
  { axis:"TF", text:"좋은 결정이란", a:{t:"T", text:"일관되고 공정한 기준을 따르는 것"}, b:{t:"F", text:"관련된 사람들의 입장을 고려하는 것"} },
  { axis:"TF", text:"갈등 상황에서 나는", a:{t:"T", text:"사실 관계를 명확히 하려 한다"}, b:{t:"F", text:"관계가 상하지 않도록 조율한다"} },

  // J / P
  { axis:"JP", text:"여행 계획을 세울 때", a:{t:"J", text:"일정과 예약을 미리 정해둔다"}, b:{t:"P", text:"큰 틀만 정하고 즉흥적으로 움직인다"} },
  { axis:"JP", text:"업무 방식은", a:{t:"J", text:"계획을 세우고 순서대로 처리한다"}, b:{t:"P", text:"마감에 맞춰 유연하게 처리한다"} },
  { axis:"JP", text:"책상이나 방의 상태는", a:{t:"J", text:"정돈되어 있어야 마음이 편하다"}, b:{t:"P", text:"어느 정도 어질러져 있어도 괜찮다"} },
  { axis:"JP", text:"결정을 내리는 방식은", a:{t:"J", text:"빠르게 결론을 내리고 진행한다"}, b:{t:"P", text:"가능한 오래 선택지를 열어둔다"} },
  { axis:"JP", text:"갑작스러운 일정 변경이 생기면", a:{t:"J", text:"불편하지만 계획을 다시 세운다"}, b:{t:"P", text:"오히려 흥미롭고 유연하게 받아들인다"} },
];

const TYPES = {
  ISTJ:{name:"청렴결백한 관리자", desc:"사실과 책임을 중시하며, 한번 맡은 일은 끝까지 해내는 신뢰의 상징입니다. 체계와 원칙 안에서 안정감을 느낍니다.",
    strengths:["강한 책임감과 실행력","꼼꼼하고 정확한 업무 처리","약속과 규율을 철저히 지킴"], watch:["변화에 유연하게 대응하기","감정 표현을 조금 더 자주 하기"]},
  ISFJ:{name:"용감한 수호자", desc:"주변 사람을 세심하게 챙기며 조용히 헌신하는 유형입니다. 안정과 조화를 지키는 데서 보람을 느낍니다.",
    strengths:["타인을 향한 세심한 배려","높은 책임감과 성실함","안정적이고 꾸준한 태도"], watch:["자신의 욕구도 먼저 챙기기","거절해야 할 때 분명히 말하기"]},
  INFJ:{name:"통찰력 있는 예언자", desc:"깊은 통찰과 이상을 품고 조용히 세상에 의미를 더하려는 유형입니다. 사람과 가치에 대한 직관이 뛰어납니다.",
    strengths:["깊은 공감과 통찰력","확고한 가치관과 신념","의미 있는 목표를 향한 헌신"], watch:["완벽주의로 지치지 않기","혼자 짊어지지 말고 도움 요청하기"]},
  INTJ:{name:"용의주도한 전략가", desc:"장기적인 비전을 세우고 체계적으로 실현해가는 전략가입니다. 독립적 사고와 효율을 무엇보다 중시합니다.",
    strengths:["뛰어난 전략적 사고","높은 독립성과 자기주도성","끊임없는 개선 욕구"], watch:["타인의 감정도 함께 고려하기","완벽보다 완료를 목표로 삼기"]},

  ISTP:{name:"만능 재주꾼", desc:"손과 논리로 세상을 이해하는 실용주의자입니다. 문제가 생기면 침착하게 원리를 파악해 해결합니다.",
    strengths:["뛰어난 문제 해결 능력","위기 상황에서의 침착함","실용적이고 효율적인 사고"], watch:["감정 표현에 조금 더 열려있기","장기 계획도 챙겨보기"]},
  ISFP:{name:"호기심 많은 예술가", desc:"자신만의 미적 감각과 가치를 조용히 따르는 유형입니다. 자유로움과 진정성을 소중히 여깁니다.",
    strengths:["섬세한 감성과 미적 감각","타인을 있는 그대로 존중함","유연하고 적응력이 뛰어남"], watch:["갈등 상황을 피하지 않기","생각을 조금 더 적극적으로 표현하기"]},
  INFP:{name:"열정적인 중재자", desc:"내면의 가치와 이상을 소중히 여기는 몽상가입니다. 진정성 있는 관계와 의미 있는 삶을 추구합니다.",
    strengths:["깊은 공감 능력","확고한 개인적 가치관","풍부한 상상력과 창의성"], watch:["비판을 개인적으로 받아들이지 않기","계획을 실행으로 옮기는 연습"]},
  INTP:{name:"논리적인 사색가", desc:"끊임없이 원리를 파고들며 지식 그 자체를 즐기는 사색가입니다. 독창적인 아이디어로 세상을 분석합니다.",
    strengths:["논리적이고 독창적인 사고","호기심과 학습 욕구","객관적인 문제 분석력"], watch:["생각을 행동으로 옮기기","타인과의 소통에 조금 더 신경 쓰기"]},

  ESTP:{name:"모험을 즐기는 사업가", desc:"지금 이 순간에 집중하며 행동으로 배우는 실전형 인물입니다. 위기 속에서 오히려 빛을 발합니다.",
    strengths:["뛰어난 순발력과 실행력","현실적인 문제 해결 능력","에너지 넘치는 추진력"], watch:["장기적 결과도 고려하기","성급한 결정 전 한번 더 점검하기"]},
  ESFP:{name:"자유로운 영혼의 연예인", desc:"주변에 활기를 불어넣는 분위기 메이커입니다. 순간을 즐기고 사람들과 함께할 때 가장 빛납니다.",
    strengths:["긍정적이고 활기찬 에너지","뛰어난 사교성","현재에 집중하는 능력"], watch:["장기 계획 세우는 습관 기르기","반복적인 업무도 꾸준히 해내기"]},
  ENFP:{name:"재기발랄한 활동가", desc:"무한한 가능성 속에서 새로운 아이디어를 찾아 나서는 열정가입니다. 사람과 영감을 나누는 데서 활력을 얻습니다.",
    strengths:["뛰어난 창의력과 상상력","따뜻한 공감 능력","강한 열정과 추진력"], watch:["시작한 일을 끝까지 마무리하기","우선순위를 정해 집중하기"]},
  ENTP:{name:"뜨거운 논쟁을 즐기는 변론가", desc:"기존의 틀에 질문을 던지며 새로운 가능성을 탐구하는 유형입니다. 토론과 아이디어 교환에서 활력을 얻습니다.",
    strengths:["빠른 발상과 순발력","뛰어난 논리적 언변","변화를 두려워하지 않는 도전정신"], watch:["세부 실행 계획도 함께 챙기기","상대의 감정도 고려하며 논쟁하기"]},

  ESTJ:{name:"엄격한 관리자", desc:"체계와 효율을 중시하며 조직을 이끄는 타고난 관리자입니다. 명확한 기준으로 신속하게 일을 처리합니다.",
    strengths:["뛰어난 조직력과 실행력","명확한 기준과 책임감","현실적인 문제 해결 능력"], watch:["다른 의견에도 귀 기울이기","융통성을 조금 더 갖기"]},
  ESFJ:{name:"사교적인 외교관", desc:"주변 사람들의 필요를 살피고 공동체의 조화를 이끄는 유형입니다. 따뜻한 배려로 사람들을 하나로 모읍니다.",
    strengths:["뛰어난 협동심과 배려","책임감 있고 성실한 태도","사람들을 잘 챙기는 능력"], watch:["타인의 평가에 덜 의존하기","자신의 의견도 분명히 표현하기"]},
  ENFJ:{name:"정의로운 사회운동가", desc:"타인의 성장을 돕고 공동체에 긍정적 변화를 이끄는 리더입니다. 사람에 대한 진심 어린 관심이 원동력입니다.",
    strengths:["뛰어난 리더십과 설득력","타인의 잠재력을 이끌어내는 능력","따뜻하고 진솔한 공감"], watch:["자신을 먼저 돌보는 시간 갖기","모든 사람을 만족시키려 하지 않기"]},
  ENTJ:{name:"대담한 통솔자", desc:"명확한 비전을 세우고 사람들을 이끌어 목표를 달성하는 타고난 지도자입니다. 효율과 성과를 중시합니다.",
    strengths:["강력한 리더십과 추진력","전략적이고 장기적인 시야","높은 목표 달성 능력"], watch:["팀원의 감정도 세심히 살피기","조급함을 조금 내려놓기"]},
};

const AXIS_META = {
  EI:{left:"E", right:"I", leftLabel:"외향", rightLabel:"내향"},
  SN:{left:"S", right:"N", leftLabel:"감각", rightLabel:"직관"},
  TF:{left:"T", right:"F", leftLabel:"사고", rightLabel:"감정"},
  JP:{left:"J", right:"P", leftLabel:"판단", rightLabel:"인식"},
};

/* ============ 상태 ============ */

let current = 0;
const answers = new Array(QUESTIONS.length).fill(null); // 'a' | 'b'

/* ============ 엘리먼트 ============ */

const screens = {
  intro: document.getElementById("screen-intro"),
  quiz: document.getElementById("screen-quiz"),
  result: document.getElementById("screen-result"),
};

const qText = document.getElementById("q-text");
const optA = document.getElementById("opt-a");
const optB = document.getElementById("opt-b");
const optAText = document.getElementById("opt-a-text");
const optBText = document.getElementById("opt-b-text");
const qCurrentEl = document.getElementById("q-current");
const qTotalEl = document.getElementById("q-total");
const btnBack = document.getElementById("btn-back");

qTotalEl.textContent = QUESTIONS.length;

/* ============ 화면 전환 ============ */

function showScreen(name){
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
}

/* ============ 퀴즈 로직 ============ */

function renderQuestion(){
  const q = QUESTIONS[current];
  qText.textContent = q.text;
  optAText.textContent = q.a.text;
  optBText.textContent = q.b.text;
  qCurrentEl.textContent = current + 1;

  optA.classList.remove("selected");
  optB.classList.remove("selected");
  const chosen = answers[current];
  if(chosen === "a") optA.classList.add("selected");
  if(chosen === "b") optB.classList.add("selected");

  btnBack.classList.toggle("visible", current > 0);
  updateGauges();
}

function updateGauges(){
  const tallies = { EI:0, SN:0, TF:0, JP:0 };
  const counts = { EI:0, SN:0, TF:0, JP:0 };

  answers.forEach((choice, i) => {
    if(!choice) return;
    const q = QUESTIONS[i];
    counts[q.axis]++;
    // 왼쪽(a) 방향이면 -1, 오른쪽(b) 방향이면 +1
    tallies[q.axis] += (choice === "a") ? -1 : 1;
  });

  Object.keys(tallies).forEach(axis => {
    const fill = document.getElementById("fill-" + axis);
    const max = 5; // 축당 문항 수
    const ratio = tallies[axis] / max; // -1 ~ 1
    const pct = Math.abs(ratio) * 50; // 0~50%
    fill.style.width = pct + "%";
    if(ratio < 0){
      fill.style.left = (50 - pct) + "%";
    } else {
      fill.style.left = "50%";
    }
  });
}

function selectChoice(choice){
  answers[current] = choice;
  renderQuestion();
  setTimeout(() => {
    if(current < QUESTIONS.length - 1){
      current++;
      renderQuestion();
    } else {
      computeResult();
    }
  }, 260);
}

optA.addEventListener("click", () => selectChoice("a"));
optB.addEventListener("click", () => selectChoice("b"));

btnBack.addEventListener("click", () => {
  if(current > 0){
    current--;
    renderQuestion();
  }
});

document.getElementById("btn-start").addEventListener("click", () => {
  current = 0;
  answers.fill(null);
  showScreen("quiz");
  renderQuestion();
});

/* ============ 결과 계산 ============ */

function computeResult(){
  const score = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };

  answers.forEach((choice, i) => {
    const q = QUESTIONS[i];
    const picked = choice === "a" ? q.a.t : q.b.t;
    score[picked]++;
  });

  const type =
    (score.E >= score.I ? "E" : "I") +
    (score.S >= score.N ? "S" : "N") +
    (score.T >= score.F ? "T" : "F") +
    (score.J >= score.P ? "J" : "P");

  renderResult(type, score);
  showScreen("result");
}

function renderResult(type, score){
  const info = TYPES[type];

  document.getElementById("result-type").textContent = type;
  document.getElementById("result-name").textContent = info.name;
  document.getElementById("result-desc").textContent = info.desc;

  const strengthsEl = document.getElementById("result-strengths");
  const watchEl = document.getElementById("result-watch");
  strengthsEl.innerHTML = "";
  watchEl.innerHTML = "";
  info.strengths.forEach(s => {
    const li = document.createElement("li");
    li.textContent = s;
    strengthsEl.appendChild(li);
  });
  info.watch.forEach(s => {
    const li = document.createElement("li");
    li.textContent = s;
    watchEl.appendChild(li);
  });

  const axesEl = document.getElementById("result-axes");
  axesEl.innerHTML = "";
  const pairs = [["E","I","EI"], ["S","N","SN"], ["T","F","TF"], ["J","P","JP"]];
  pairs.forEach(([left, right, axisKey]) => {
    const total = score[left] + score[right];
    const leftPct = Math.round((score[left] / total) * 100);
    const rightPct = 100 - leftPct;
    const meta = AXIS_META[axisKey];

    const row = document.createElement("div");
    row.className = "axis-preview-row";
    row.style.gridTemplateColumns = "70px 1fr 70px";
    row.innerHTML = `
      <span class="letter" style="text-align:left">${left} ${leftPct}%</span>
      <div class="track"><div class="fill" style="width:${leftPct}%; background:linear-gradient(90deg, var(--gold), var(--violet));"></div></div>
      <span class="letter" style="text-align:right">${right} ${rightPct}%</span>
    `;
    axesEl.appendChild(row);
  });
}

document.getElementById("btn-restart").addEventListener("click", () => {
  current = 0;
  answers.fill(null);
  showScreen("intro");
});
