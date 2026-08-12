export const metadata = {
  title: "회사소개 | 전문 철거 & HACCP · 전기/시설보수 센터",
  description:
    "상가·사무실·공장 전문 철거, 소상공인 점포 원상복구 정부 보조금 최대 600만원 지원 신청! HACCP 공사, 전기공사(승압/배선), 시설 보수 리모델링 전문 시공기업",
};

const strengths = [
  {
    title: "정부 보조금 600만 원 지원 컨설팅",
    desc: "희망리턴패키지 등 소상공인 점포철거 정부 지원금 자격 무료 조회 및 증빙 가이드부터 수혜까지 100% 케어해 드립니다.",
  },
  {
    title: "하도급 없는 직영 시공팀",
    desc: "전문 철거, HACCP 위생 판넬/에폭시 시공, 전기 승압 및 방수 보수까지 외주 없이 직영 인력이 책임지고 기술 시공합니다.",
  },
  {
    title: "안전 기준 & 법적 규격 준수",
    desc: "소음/진동 최소화 전문 장비 사용, HACCP 인증 식약처 규격 및 전기안전공사 검범 기준을 철저히 충족합니다.",
  },
  {
    title: "무료 방문견적 & 사후 보증",
    desc: "현장 무료 방문으로 세부 투명 견적서를 제안 드리며, 시공 완료 후 철저한 사후 A/S 보증을 실천합니다.",
  },
];

const services = [
  "전문 철거 & 점포 원상복구 공사",
  "소상공인 철거 정부보조금(최대 600만) 컨설팅",
  "HACCP 인증 식품공장 & 클린룸 시공",
  "위생 판넬, 에폭시 바닥, 에어샤워 설치",
  "한전 전기 승압 공사 & 동력배선 시공",
  "옥상 / 외벽 우레탄 방수 & 균열 보수",
  "상가 · 사무실 · 공장 시설 리모델링",
  "전국 무상 현장 방문 견적 안내",
];

const processSteps = [
  {
    step: "01",
    title: "상담 & 무료 방문",
    desc: "현장 무료 방문으로 철거/시공 범위를 진단하고 정부 보조금 수혜 대상 여부를 확인합니다.",
  },
  {
    step: "02",
    title: "설계 & 투명 견적",
    desc: "HACCP 위생 동선, 철거 공정, 전기 승압 계산을 통해 합리적이고 투명한 세부 견적을 안내합니다.",
  },
  {
    step: "03",
    title: "보조금 서류 준비",
    desc: "점포 철거 지원금 증빙 서류와 공사 과업 사진을 작성 및 지원하여 신청을 돕습니다.",
  },
  {
    step: "04",
    title: "정밀 안전 시공",
    desc: "소음·진동 최소화 전문 철거 및 HACCP/전기/보수 직영 시공팀이 안전하게 공사를 진행합니다.",
  },
  {
    step: "05",
    title: "준공 검사 & 사후 AS",
    desc: "원상복구 승인, HACCP/전기 검사 완료 및 보조금 수령 확인 후 철저한 하자보수를 보증합니다.",
  },
];

export default function CompanyPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO WITH FACTORY BACKGROUND */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 text-white min-h-[480px] flex items-center">
        {/* Real Factory Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity scale-105 transform transition duration-1000 hover:scale-100"
          style={{ backgroundImage: `url('/images/company-bg.jpg')` }}
        />
        {/* Dark Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/20 px-4 py-2 text-xs font-bold text-amber-400 backdrop-blur-md">
              <span>🏗️</span>
              <span>BUILDING & DEMOLITION & HACCP & ELECTRIC CENTER</span>
            </div>

            <h1 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl leading-tight">
              전문 철거 · 원상복구 (보조금 600만)
              <br />
              HACCP공사 & 전기/시설보수 전문기업
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              <strong className="font-black text-amber-400">신흥건설</strong>은 상가·사무실·공장 전문 철거와 점포 원상복구시
              <span className="font-bold text-amber-400"> 국가에서 제공하는 소상공인 정부 보조금(최대 600만 원까지)</span> 자격 조회부터 수혜 절차까지 100% 지원하는 <strong className="text-white">전문 지원 컨설팅 & 직영 철거·시공 기업</strong>입니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#sms-lead"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-3 text-sm font-black text-slate-950 transition hover:from-amber-300 hover:to-amber-400 shadow-lg"
              >
                무료 방문견적 & 보조금 신청 ➔
              </a>
              <a
                href="tel:0517143396"
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/90 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 backdrop-blur-md"
              >
                📞 전화 상담 (051-714-3396)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND MESSAGE */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="text-xs font-bold text-amber-600">ABOUT COMPANY</div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 md:text-4xl">
              믿을 수 있는 기술력과
              <br />
              정직한 시공을 약속드립니다
            </h2>
          </div>

          <div className="space-y-4 text-sm leading-7 text-slate-700 md:text-base">
            <p>
              철거와 원상복구는 단순 부수는 작업이 아닌, **건물 구조 안전**과 **임대인 검수 완벽 승인**, 그리고 **정부 지원금 최대 활용**이 결합되어야 비로소 성공적입니다.
            </p>
            <p>
              당사는 철거비 부담을 덜어드리는 **소상공인 정부보조금(최대 600만 원)** 지원 컨설팅부터, 식품공장 HACCP 인증 판넬/바닥 시공, 전기 승압 및 동력 배선, 옥상/외벽 방수 보수까지 통합 직영 인력으로 해결합니다.
            </p>
          </div>
        </div>

        {/* Real Factory Image Card Showcase */}
        <div className="mt-12 overflow-hidden rounded-3xl border-2 border-slate-900 bg-slate-950 shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[300px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/company-bg.jpg"
                alt="신흥건설 본사 및 HACCP 식품공장 시설 전경"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4 rounded-full bg-emerald-600 px-3.5 py-1 text-xs font-black text-white shadow">
                HACCP 식품안전관리인증 직영 현장
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 text-white">
              <span className="rounded-md bg-amber-500/20 px-3 py-1 text-xs font-black text-amber-400 w-fit">
                🏢 본사 및 전용 시공 센터 전경
              </span>
              <h3 className="mt-3 text-2xl font-black text-white">
                김해 신흥건설 직영 센터
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-300 md:text-sm">
                경남 김해시 금관대로 119번길 21-13에 위치한 신흥건설 본사 전경입니다.
                자체 철거 장비 및 HACCP 판넬/전기 자재를 직영 관리하여 거품 없는 공사 단가와 최상의 품질을 보장합니다.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-amber-400 border-t border-slate-800 pt-4">
                <span>📍 주소: 경남 김해시 금관대로 119번길 21-13 신흥건설</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE STRENGTHS */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-8">
        <div className="mb-8">
          <div className="text-xs font-bold text-amber-600">WHY CHOOSE US</div>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 md:text-4xl">
            저희를 선택해야 하는 4가지 핵심 이유
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-base font-black text-slate-900">{item.title}</div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-8">
            <div className="text-xs font-bold text-amber-600">OUR SERVICES</div>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 md:text-4xl">
              주요 사업 영역
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-xs font-bold text-slate-900 shadow-xs"
              >
                ✔ {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="mb-8">
          <div className="text-xs font-bold text-amber-600">WORKFLOW</div>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 md:text-4xl">
            원스톱 공사 진행 순서
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-black text-amber-600">{item.step}</div>
              <div className="mt-2 text-base font-bold text-slate-900">{item.title}</div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPANY INFO */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="text-xs font-bold text-amber-600">COMPANY INFO</div>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900">
            사업자 기본 정보 & 계좌안내
          </h2>

          <div className="mt-6 grid gap-4 text-xs leading-relaxed text-slate-700 md:grid-cols-2">
            <div><span className="font-bold text-slate-900">상호명</span> : 신흥건설</div>
            <div><span className="font-bold text-slate-900">대표자</span> : 이승복</div>
            <div><span className="font-bold text-slate-900">사무실 주소</span> : 경남 김해시 금관대로 119번길 21-13</div>
            <div><span className="font-bold text-slate-900">사업자등록번호</span> : 501-26-30652</div>
            <div><span className="font-bold text-slate-900">전화번호</span> : 051-714-3396</div>
            <div><span className="font-bold text-slate-900">입금 계좌</span> : 기업은행 01087932304 (예금주: 신흥건설)</div>
          </div>
        </div>
      </section>
    </main>
  );
}