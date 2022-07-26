interface Menu {
  label: string;
  path: string;
}
interface MenuOptions extends Menu {
  children?: Menu[];
}

export const MenuOptions: MenuOptions[] = [
  {
    label: "首页",
    path: "/dashboard",
  },
  {
    label: "Formily-reactive",
    path: "",
    children: [
      {
        label: "observable",
        path: "/formily/observable",
      },
      {
        label: "autorun",
        path: "/formily/autorun",
      },
      {
        label: "reaction",
        path: "/formily/reaction",
      },
      {
        label: "batch",
        path: "/formily/batch",
      },
      {
        label: "action",
        path: "/formily/action",
      },
      {
        label: "define",
        path: "/formily/define",
      },
      {
        label: "model",
        path: "/formily/model",
      },
      {
        label: "observe",
        path: "/formily/observe",
      },
      {
        label: "markRaw",
        path: "/formily/markRaw",
      },
      {
        label: "markObservable",
        path: "/formily/markObservable",
      },
      {
        label: "raw",
        path: "/formily/raw",
      },
      {
        label: "toJs",
        path: "/formily/toJs",
      },
      {
        label: "untracked",
        path: "/formily/untracked",
      },
      {
        label: "hasCollected",
        path: "/formily/hasCollected",
      },
      {
        label: "tracker",
        path: "/formily/tracker",
      },
      {
        label: "typeChekcer",
        path: "/formily/typeChekcer",
      },
    ],
  },
  {
    label: "账户管理",
    path: "/account",
  },
  {
    label: "系统管理",
    path: "",
  },
];
