export const metadata = {
  title: "회사소개 | 허니예스",
  description:
    "허니예스는 코사무이 여행을 더 유리하게 설계하는 프리미엄 여행 파트너입니다. 현지 파트너 N TOUR와 함께 허니문, 가족여행, 리조트, 투어, 공항 픽업까지 다이렉트로 제안합니다.",
};

const strengths = [
  {
    title: "중간마진 없이 다이렉트",
    desc: "여행사 중간 유통을 줄이고, 현지와 직접 연결해 온라인 최저가 비교 기준으로 가장 유리한 조건을 제안합니다.",
  },
  {
    title: "같은 리조트도 견적은 다릅니다",
    desc: "같은 반얀트리라도 일정 구성, 행사 포함 여부, 차량 동선에 따라 견적 차이는 크게 달라집니다.",
  },
  {
    title: "가족여행은 설계가 핵심",
    desc: "가족여행은 단순 예약보다 동선, 일정, 리조트, 이동 편의까지 맞춤으로 설계하는 것이 만족도를 바꿉니다.",
  },
  {
    title: "투명한 현지 다이렉트 견적",
    desc: "허니예스는 돌려 말하지 않는 견적, 숨김 없는 조건 안내, 실제 여행에 맞는 실속형 구성을 지향합니다.",
  },
];

const bookingBenefits = [
  {
    title: "에어텔 고객",
    price: "무료",
    desc: "호텔+항공을 직접 온라인으로 예약하신 경우, 공항 ↔ 리조트 무료 픽업·샌딩 서비스를 제공합니다.",
  },
  {
    title: "호텔+행사 예약 고객",
    price: "50,000원",
    desc: "호텔과 행사 예약을 맡겨주신 고객님께는 50,000원에 차량지원까지 함께 제공해드립니다.",
  },
  {
    title: "항공+호텔+행사 예약 고객",
    price: "최저가 견적",
    desc: "항공, 호텔, 행사까지 함께 진행하시면 전체 조합 기준으로 가장 유리한 견적을 우선 제안합니다.",
  },
];

const services = [
  "코사무이 허니문 맞춤 설계",
  "가족여행 / 효도여행 일정 구성",
  "프리미엄 리조트 · 풀빌라 제안",
  "공항 픽업 · 샌딩 및 차량지원",
  "요트 · 호핑 · 스냅 · 스파 등 현지 투어",
  "현지 실시간 응대 및 일정 케어",
];

const processSteps = [
  {
    step: "01",
    title: "상담",
    desc: "여행 목적, 예산, 인원, 원하는 리조트와 일정 방향을 먼저 파악합니다.",
  },
  {
    step: "02",
    title: "설계",
    desc: "허니문/가족여행 성격에 맞춰 리조트, 행사, 차량, 동선을 가장 효율적으로 구성합니다.",
  },
  {
    step: "03",
    title: "견적 제안",
    desc: "온라인 최저가 비교 기준으로 가장 유리한 다이렉트 견적을 제안합니다.",
  },
  {
    step: "04",
    title: "예약 확정",
    desc: "선택하신 구성으로 예약을 진행하고, 필요한 안내사항을 정확하게 전달합니다.",
  },
  {
    step: "05",
    title: "현지 케어",
    desc: "코사무이 현지 파트너와 함께 공항 미팅, 픽업, 행사, 일정 진행까지 끝까지 챙겨드립니다.",
  },
];

export default function CompanyPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-sky-700">
              HONEY YES · KOH SAMUI TRAVEL BRAND
            </div>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              허니예스는
              <br className="hidden md:block" />
              코사무이 여행을 더 유리하게 설계합니다
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 md:text-lg">
              허니예스는 신혼여행부터 가족여행까지,
              <span className="font-semibold text-slate-900">
                {" "}상품과 동선까지 다이렉트로 설계해
              </span>
              {" "}온라인 최저가 비교 기준으로 가장 유리한 조건을 제안하는 여행 파트너입니다.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
              한국에서의 상담과 설계는 허니예스가 중심이 되고,
              코사무이 현지에서는 파트너 네트워크를 통해 픽업, 행사, 투어, 일정 진행까지
              실질적인 여행 운영을 연결합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#sms-lead"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                견적 상담받기
              </a>
              <a
                href="tel:0522276464"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                전화 상담하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND MESSAGE */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="text-sm font-bold text-sky-700">ABOUT HONEY YES</div>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              단순 예약보다
              <br className="hidden md:block" />
              여행 설계가 더 중요합니다
            </h2>
          </div>

          <div className="space-y-4 text-sm leading-7 text-gray-700 md:text-base">
            <p>
              코사무이는 같은 리조트를 가더라도 어떻게 조합하느냐에 따라
              가격, 이동 편의, 만족도가 완전히 달라지는 여행지입니다.
            </p>
            <p>
              허니예스는 단순히 상품을 나열하는 방식보다,
              고객의 여행 목적에 맞춰 리조트와 일정, 차량, 행사, 현지 동선을
              가장 효율적으로 맞추는 방식을 지향합니다.
            </p>
            <p>
              그래서 허니예스의 회사소개는 “어디를 예약하느냐”보다
              <span className="font-semibold text-slate-900">
                {" "}“누가 여행을 설계해주느냐”가 결과를 바꾼다
              </span>
              는 믿음에서 시작합니다.
            </p>
          </div>
        </div>
      </section>

      {/* CORE STRENGTHS */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-8">
        <div className="mb-8">
          <div className="text-sm font-bold text-sky-700">WHY HONEY YES</div>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            허니예스가 강한 이유
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-lg font-extrabold text-slate-900">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
          <div className="mb-8">
            <div className="text-sm font-bold text-sky-700">BOOKING BENEFITS</div>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              예약 조합이 다르면,
              <br className="hidden md:block" />
              혜택도 다르게 챙겨드립니다
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {bookingBenefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-bold text-sky-700">{item.title}</div>
                <div className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
                  {item.price}
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-600">
            코사무이는 교통과 현지 동선이 생각보다 중요한 여행지입니다.
            허니예스는 예약 상태에 따라 가장 체감되는 혜택부터 먼저 챙겨드립니다.
          </p>
        </div>
      </section>

      {/* COLLAB SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-sm font-bold text-sky-700">HONEY YES</div>
            <h3 className="mt-3 text-2xl font-extrabold text-slate-900">
              상담과 설계의 중심
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-700">
              <li>✔ 고객 목적에 맞는 여행 방향 제안</li>
              <li>✔ 허니문 / 가족여행 / 효도여행 맞춤 설계</li>
              <li>✔ 리조트 · 행사 · 차량 동선 조합 최적화</li>
              <li>✔ 온라인 최저가 비교 기준의 유리한 견적 제안</li>
              <li>✔ 예약 전후 안내와 커뮤니케이션 총괄</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-sky-50 p-8 shadow-sm">
            <div className="text-sm font-bold text-sky-700">LOCAL PARTNER</div>
            <h3 className="mt-3 text-2xl font-extrabold text-slate-900">
              코사무이 현지 실행 네트워크
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-700">
              <li>✔ 공항 픽업 · 샌딩 및 현지 차량 운영</li>
              <li>✔ 리조트 체크인, 행사, 투어 진행 연결</li>
              <li>✔ 허니문 / 가족여행 맞춤 현지 일정 운영</li>
              <li>✔ 현지 상황에 맞춘 빠른 일정 대응</li>
              <li>✔ 여행 중 필요한 순간 실질적인 현장 케어</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white">
          <div className="text-sm font-bold text-sky-300">COLLABORATION</div>
          <p className="mt-3 text-lg font-semibold leading-8 md:text-xl">
            허니예스는 앞단의 상담과 견적, 여행 설계를 책임지고
            현지 파트너 네트워크는 코사무이에서의 실제 운영을 책임집니다.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
            즉, 고객 입장에서는 허니예스 중심으로 상담받되
            현지에서는 검증된 운영력과 밀착 대응을 함께 누릴 수 있는 구조입니다.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-16 md:px-8">
          <div className="mb-8">
            <div className="text-sm font-bold text-sky-700">SERVICES</div>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              주요 서비스
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-900"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
          <div className="mb-8">
            <div className="text-sm font-bold text-sky-700">PROCESS</div>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              허니예스 진행 방식
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-extrabold text-sky-700">{item.step}</div>
                <div className="mt-2 text-lg font-extrabold text-slate-900">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY INFO */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="text-sm font-bold text-sky-700">COMPANY INFO</div>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
            회사 정보
          </h2>

          <div className="mt-8 grid gap-4 text-sm leading-7 text-gray-700 md:grid-cols-2">
            <div><span className="font-bold text-slate-900">상호명</span> : 주식회사 허니예스</div>
            <div><span className="font-bold text-slate-900">대표</span> : 하정일</div>
            <div><span className="font-bold text-slate-900">사무실주소</span> : 울산광역시 남구 번영로 246번길 10(삼산동)</div>
            <div><span className="font-bold text-slate-900">사업자등록번호</span> : 610-81-98197</div>
            <div><span className="font-bold text-slate-900">통신판매업신고</span> : 2022-울산남구-0330</div>
            <div><span className="font-bold text-slate-900">E-mail</span> : hajipower@naver.com</div>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-gray-600">
            허니예스는 코사무이 여행을 상담부터 설계, 견적, 예약, 현지 연결까지
            한 번에 정리해드리는 여행 파트너입니다.
            <br />
            화려한 말보다, 실제 여행이 더 편하고 더 유리해지는 구성을 제안하겠습니다.
          </div>
        </div>
      </section>
    </main>
  );
}