#set document(
  title: "信号与系统：零基础学习笔记",
  author: "zooeywm",
)

#set page(paper: "a4", margin: 1.8cm)
#set text(
  font: ("Noto Sans CJK SC", "Noto Sans"),
  size: 10.5pt,
  lang: "zh",
)
#set heading(numbering: "1.")

#align(center)[
  #text(size: 22pt, weight: "bold")[信号与系统]
  #v(0.4em)
  #text(size: 12pt)[零基础学习笔记]
]

#v(1em)

这份笔记假设读者没有高等数学、复数、微积分和线性代数基础。所有新符号都先解释，再使用。

#outline(title: [目录])
#pagebreak()

#include "chapters/00-roadmap.typ"
#include "chapters/01-functions-signals.typ"
#include "chapters/02-integral-impulse.typ"
#include "chapters/03-lti-convolution.typ"
#include "chapters/04-sinusoid-basics.typ"
#include "chapters/05-system-properties-frequency-response.typ"
#include "chapters/02-fourier-basics.typ"
#include "chapters/03-euler-dft-fft.typ"
#include "chapters/06-sampling-nyquist.typ"
