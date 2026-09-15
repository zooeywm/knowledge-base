# 信号与系统学习笔记

这里保存 Typst 源文件，`main.typ` 是统一入口。

本地预览：

```bash
typst watch notes/signals-and-systems/main.typ
```

本地生成 PDF：

```bash
typst compile notes/signals-and-systems/main.typ signals-and-systems.pdf
```

GitHub Pages 部署时会自动生成：

```text
public/notes/signals-and-systems.pdf
```

章节内容放在 `chapters/` 下，通过 `main.typ` 的 `#include` 统一组织。
