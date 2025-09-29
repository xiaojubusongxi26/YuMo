class SvgPreloader {
  icons: any = {};
  loaded: boolean = false;
  constructor() {
    this.icons = {};
    this.loaded = false;
  }

  async loadAllIcons() {
    if (this.loaded) {
      return this.icons;
    }

    try {
      const svgModules = import.meta.glob("@/assets/icons/svg/*.svg", {
        eager: true,
        as: "raw",
      });

      for (const [path, content] of Object.entries(svgModules)) {
        const iconName: any = path.split("/").pop()?.replace(".svg", "");
        this.icons[iconName] = content
          .replace(/<svg[^>]*>/gi, "")
          .replace(/<\/svg>/gi, "")
          .trim();
      }

      this.loaded = true;
    } catch (error) {
      console.error("预加载 SVG 图标失败:", error);
    }

    return this.icons;
  }

  getIcon(name: string) {
    console.log("icons:", this.icons);

    return this.icons[name] || "";
  }

  getAllIcons() {
    return this.icons;
  }

  getIconNames() {
    return Object.keys(this.icons);
  }
}

// 创建单例
export const svgPreloader = new SvgPreloader();
