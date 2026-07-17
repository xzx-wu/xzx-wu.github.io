window.KNOWLEDGE_REALMS = {
  "ai-agents": "AI 与智能体",
  "java-engineering": "Java 与工程",
  "tools-productivity": "工具与效率",
  "thinking-reflection": "思考与复盘"
};

window.KNOWLEDGE_ARTICLES = [
  {
    slug: "linux-deploy-spring-boot",
    path: "knowledge/articles/linux-deploy-spring-boot/index.html",
    title: "Linux 部署 Spring Boot 项目",
    description: "从 JDK 安装、JAR 打包上传，到后台运行、日志检查与启动脚本管理。",
    date: "2026-07-17",
    readingTime: "约 10 分钟",
    primaryRealm: "java-engineering",
    realms: ["java-engineering", "tools-productivity"],
    tags: ["Linux", "Spring Boot", "部署"],
    cover: "assets/images/fantasy/article-astrolabe.webp"
  },
  {
    slug: "mapstruct-guide",
    path: "knowledge/articles/mapstruct-guide/index.html",
    title: "MapStruct 使用教程与常见问题",
    description: "系统整理 MapStruct 的基础映射、Spring 集成、自定义类型转换与常见编译问题。",
    date: "2024-12-19",
    readingTime: "约 16 分钟",
    primaryRealm: "java-engineering",
    realms: ["java-engineering", "tools-productivity"],
    tags: ["MapStruct", "Java", "Bean 转换"],
    cover: "assets/images/fantasy/article-knowledge-tree.webp"
  },
  {
    slug: "spring-boot-druid",
    path: "knowledge/articles/spring-boot-druid/index.html",
    title: "Spring Boot 配置 Druid",
    description: "基于 Spring Boot 1.5.10 配置 Druid 数据源、监控控制台、过滤器和连接池参数。",
    date: "2018-08-01",
    readingTime: "约 10 分钟",
    primaryRealm: "java-engineering",
    realms: ["java-engineering"],
    tags: ["Spring Boot", "Druid", "数据源"],
    cover: "assets/images/fantasy/article-book.webp"
  },
  {
    slug: "spring-boot-redis-cluster",
    path: "knowledge/articles/spring-boot-redis-cluster/index.html",
    title: "Spring Boot 整合 Redis 集群",
    description: "记录 Spring Boot 1.5.10 使用 JedisCluster 连接 Redis 集群的配置与基础工具类。",
    date: "2018-07-31",
    readingTime: "约 14 分钟",
    primaryRealm: "java-engineering",
    realms: ["java-engineering"],
    tags: ["Spring Boot", "Redis", "JedisCluster"],
    cover: "assets/images/fantasy/article-astrolabe.webp"
  },
  {
    slug: "spring-boot-dubbo-zookeeper",
    path: "knowledge/articles/spring-boot-dubbo-zookeeper/index.html",
    title: "Spring Boot 注解整合 Dubbo 与 ZooKeeper",
    description: "使用早期 Dubbo Spring Boot Starter、YAML 与注解完成接口、服务提供者和消费者配置。",
    date: "2018-04-13",
    readingTime: "约 12 分钟",
    primaryRealm: "java-engineering",
    realms: ["java-engineering"],
    tags: ["Spring Boot", "Dubbo", "ZooKeeper"],
    cover: "assets/images/fantasy/article-astrolabe.webp"
  },
  {
    slug: "java-string-memory",
    path: "knowledge/articles/java-string-memory/index.html",
    title: "Java String 与 new String 的内存存储",
    description: "通过实验代码比较 String 字面量、new String 与对象字段的引用关系，并记录字符串常量池现象。",
    date: "2018-01-25",
    readingTime: "约 8 分钟",
    primaryRealm: "java-engineering",
    realms: ["java-engineering"],
    tags: ["Java", "String", "JVM"],
    cover: "assets/images/fantasy/article-knowledge-tree.webp"
  },
  {
    slug: "spring-boot-swagger",
    path: "knowledge/articles/spring-boot-swagger/index.html",
    title: "Swagger 搭建（基于 Spring Boot）",
    description: "整理 Spring Boot 项目中 Springfox Swagger 的依赖、配置、接口注解与生产环境关闭方式。",
    date: "2018-01-22",
    readingTime: "约 10 分钟",
    primaryRealm: "java-engineering",
    realms: ["java-engineering", "tools-productivity"],
    tags: ["Spring Boot", "Swagger", "API 文档"],
    cover: "assets/images/fantasy/article-book.webp"
  }
];
