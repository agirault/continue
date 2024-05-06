import ignore from "ignore";

const DEFAULT_IGNORE_FILETYPES = [
  "*.DS_Store",
  "*-lock.json",
  "*.lock",
  "*.log",
  "*.ttf",
  "*.png",
  "*.jpg",
  "*.jpeg",
  "*.gif",
  "*.mp4",
  "*.svg",
  "*.ico",
  "*.pdf",
  "*.zip",
  "*.gz",
  "*.tar",
  "*.dmg",
  "*.tgz",
  "*.rar",
  "*.7z",
  "*.exe",
  "*.dll",
  "*.obj",
  "*.o",
  "*.o.d",
  "*.a",
  "*.lib",
  "*.so",
  "*.dylib",
  "*.ncb",
  "*.sdf",
  "*.woff",
  "*.woff2",
  "*.eot",
  "*.cur",
  "*.avi",
  "*.mpg",
  "*.mpeg",
  "*.mov",
  "*.mp3",
  "*.mp4",
  "*.mkv",
  "*.mkv",
  "*.webm",
  "*.jar",
  "*.onnx",
  "*.parquet",
  "*.pqt",
  "*.wav",
  "*.webp",
  "*.db",
  "*.sqlite",
  "*.wasm",
  "*.plist",
  "*.profraw",
  "*.gcda",
  "*.gcno",
];
export const defaultIgnoreFile = ignore().add(DEFAULT_IGNORE_FILETYPES);
export const DEFAULT_IGNORE_DIRS = [
  ".git",
  ".vscode",
  ".idea",
  ".vs",
  "venv",
  ".venv",
  "env",
  ".env",
  "node_modules",
  "dist",
  "build",
  "target",
  "out",
  "bin",
  ".pytest_cache",
  ".vscode-test",
  ".continue",
  "__pycache__",
  "site-packages",
  ".cache",
  "gems",
];
export const defaultIgnoreDir = ignore().add(DEFAULT_IGNORE_DIRS);
