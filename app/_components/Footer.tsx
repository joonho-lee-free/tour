// app/_components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white text-gray-600 text-xs pb-24 sm:pb-16">
      <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:py-12 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* 사업자 정보 */}
          <div className="space-y-1.5 leading-relaxed">
            <div className="text-sm font-extrabold text-gray-900">
              李家 (이가) · 부울경 상가·매장 전문 철거 & 정부지원금 센터
            </div>
            <div className="text-amber-600 font-bold">
              소상공인시장진흥공단 점포철거비 지원사업 협력 시공사
            </div>

            <div className="pt-2 text-gray-600 space-y-1 text-[11px] sm:text-xs">
              <div>
                <span className="font-semibold text-gray-900">상호명</span> : 李家 (이가)
              </div>
              <div>
                <span className="font-semibold text-gray-900">대표자</span> : 이준호
              </div>
              <div>
                <span className="font-semibold text-gray-900">사업자등록번호</span> : 408-30-91599
              </div>
              <div>
                <span className="font-semibold text-gray-900">사업장 주소</span> : 부산시 강서구 낙동북로 31번길 19
              </div>
              <div>
                <span className="font-semibold text-gray-900">대표 전화</span> : 051-714-3396
              </div>
            </div>

            <div className="mt-3 rounded-xl bg-gray-50 p-3 text-[11px] border border-gray-200 text-gray-700">
              <span className="text-amber-700 font-bold">공식 입금 계좌</span>: 기업은행 256-117020-01-012 (예금주: 이준호(이가f&b))
            </div>

            <p className="pt-2 text-[11px] text-gray-400">
              © 李家 (이가). All rights reserved.
            </p>
          </div>

          {/* 주요 안내 및 링크 */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-4">
              <div className="font-bold text-gray-900 text-xs sm:text-sm">
                부울경 전지역 0원 무료 방문 실측
              </div>
              <p className="mt-1 text-[11px] text-gray-600 leading-relaxed">
                부산 전지역, 김해, 창원, 마산, 양산 등 부울경 상가·매장 어디든 당일 또는 원하시는 일정에 무료 방문 실측을 진행해 드립니다.
              </p>
              <div className="mt-3 flex gap-2">
                <a
                  href="tel:0517143396"
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700"
                >
                  <span>📞 051-714-3396 대표번호 직통 연결</span>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-[11px] text-gray-500 border-t border-gray-200">
              <div className="flex gap-4">
                <a className="hover:text-gray-900" href="/company">
                  회사소개
                </a>
                <a className="hover:text-gray-900" href="/privacy">
                  개인정보처리방침
                </a>
                <a className="hover:text-gray-900" href="/terms">
                  이용약관
                </a>
              </div>

              <a
                href="https://www.instagram.com/shcom4553"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-pink-600 hover:text-pink-700"
              >
                인스타그램 @shcom4553 ➔
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
