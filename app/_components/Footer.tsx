// app/_components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* 사업자 정보 */}
          <div className="text-xs leading-relaxed text-slate-400">
            <div className="text-base font-extrabold text-white">신흥건설 전문 철거 & HACCP · 전기/시설보수 센터</div>
            <div className="mt-1 font-bold text-amber-400">신흥건설 (건축/철거/전기/보수 사업부)</div>
            <div className="mt-3 space-y-1">
              <div>
                <span className="font-semibold text-slate-200">상호명</span> : 신흥건설
              </div>
              <div>
                <span className="font-semibold text-slate-200">대표자</span> : 이승복
              </div>
              <div>
                <span className="font-semibold text-slate-200">사무실 주소</span> : 경남 김해시 금관대로 119번길 21-13
              </div>
              <div>
                <span className="font-semibold text-slate-200">사업자등록번호</span> : 501-26-30652
              </div>
              <div>
                <span className="font-semibold text-slate-200">전화번호</span> : 051-714-3396
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-slate-950 p-3 text-[11px] text-slate-400">
              <div className="font-bold text-amber-400">입금 계좌 안내</div>
              <div className="mt-1 text-slate-200 font-bold">기업은행 01087932304</div>
              <div>예금주: 신흥건설</div>
            </div>

            <div className="mt-4 text-[11px] text-slate-500">
              © 신흥건설. All rights reserved.
            </div>
          </div>

          {/* 고객센터 및 무료 방문 상담 */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/80 p-6">
            <div className="text-xs font-bold text-amber-400">무료 방문견적 & 보조금 상담 고객센터</div>
            <div className="mt-2 text-2xl font-black tracking-tight text-white">
              051-714-3396
            </div>
            <div className="mt-2 text-xs text-slate-300">
              평일/주말: 08:00 ~ 21:00 (연중무휴 빠른 상담)
              <br />
              무료 현장 방문 견적 & 보조금 자격 조회
            </div>

            <div className="mt-5 space-y-2">
              <a
                href="tel:0517143396"
                className="inline-flex w-full items-center justify-center rounded-xl bg-amber-500 px-4 py-3 text-xs font-black text-slate-900 shadow-md transition hover:bg-amber-400"
              >
                📞 즉시 전화 상담하기
              </a>

              <a
                href="/#sms-lead"
                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-xs font-bold text-white transition hover:bg-slate-850"
              >
                💰 보조금 600만 & 견적 문의 폼
              </a>
            </div>
          </div>

          {/* 주요 제공 서비스 범위 */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-6">
            <div className="text-xs font-bold text-white">주요 사업 영역</div>
            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">🔨</span>
                <span>전문 철거 & 정부 보조금 최대 600만원 지원</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">🏭</span>
                <span>HACCP 인증 식품공장 · 클린룸 · 위생판넬 시공</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-blue-400 font-bold">⚡</span>
                <span>전기공사 (한전 승압 · 동력전기 · 배선/조명)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-sky-400 font-bold">🛠️</span>
                <span>시설 보수 (옥상/외벽 방수 · 크랙보수 · 리모델링)</span>
              </li>
            </ul>

            <div className="mt-4 rounded-xl bg-slate-950 p-3 text-[11px] leading-relaxed text-slate-400">
              * 전국 상가, 사무실, 공장, 식당 전문 무료 방문 견적을 약속드립니다.
            </div>
          </div>
        </div>

        {/* 하단 메뉴 */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-slate-800 pt-6 text-xs text-slate-400">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a className="hover:text-amber-400" href="/company">
              회사소개
            </a>
            <a className="hover:text-amber-400" href="/privacy">
              개인정보처리방침
            </a>
            <a className="hover:text-amber-400" href="/terms">
              이용약관
            </a>
          </div>
          
          <a
            href="https://www.instagram.com/shcom4553"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 transition"
          >
            <span>📷 공식 인스타그램 (@shcom4553)</span>
            <span>➔</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
