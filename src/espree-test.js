import * as espree from "espree";
// 파싱하고 싶은 코드
const code = `function App() {
  return <div>Hello</div>;
}`;

try {
  const ast = espree.parse(code, {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  });

  console.log(JSON.stringify(ast, null, 2));
} catch (error) {
  console.error("Parsing error:", error);
}
