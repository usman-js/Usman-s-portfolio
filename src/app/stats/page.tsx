
import {
  Card,
  Column,
  Flex,
  Grid,
  Heading,
  Icon,
  Row,
  Text,
} from "@once-ui-system/core";

import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiGit,
  SiGithub,
} from "@icons-pack/react-simple-icons";

const stats = [
  {
    value: "6+",
    label: "Projects",
    description: "Built and experimented with",
    icon: "code",
  },
  {
    value: "8+",
    label: "Technologies",
    description: "Across frontend and backend",
    icon: "layers",
  },
  {
    value: "5+",
    label: "Certificates",
    description: "Courses completed from Scrimba",
    icon: "certificate",
  },
  {
    value: "1",
    label: "Internship",
    description: "Real-world experience",
    icon: "briefcase",
  },
];

const technologies = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

const projects = [
  {
    number: "01",
    title: "JavaScript Projects",
    description: "Interactive web applications built with JavaScript.",
  },
  {
    number: "02",
    title: "React Projects",
    description: "Modern interfaces and reusable React components.",
  },
  {
    number: "03",
    title: "Next.js Projects",
    description: "Full-stack applications using Next.js.",
  },
  {
    number: "04",
    title: "Full-Stack Projects",
    description: "Applications combining frontend, backend and databases.",
  },
];

const certificates = [
  {
    title: "Javascript",
    provider: "Scrimba",
    description: "Completed a JavaScript course and strengthened my understanding of core programming concepts and modern web development. ",
  },
  {
    title: "Modren javascript ",
    provider: "Scrimba",
    description: "Completed a Modern JavaScript course and strengthened my understanding of ES6+, asynchronous programming, and modern JavaScript concepts.",
  },
  {
    title: "Tailwind CSS",
    provider: "Scrimba",
    description: "Completed a Tailwind CSS course and strengthened my understanding of utility-first styling and responsive UI development.",
  },
  {
    title: "React",
    provider: "Scrimba",
    description: "Completed a React course and strengthened my understanding of component-based development and modern frontend applications.",
  },
    {
    title: "Next.js",
    provider: "Scrimba",
    description: "Completed a Next.js course and strengthened my understanding of modern React applications and full-stack web development.",
  },
];

export default function Stats() {
  return (
    <Column fillWidth gap="xl">

      {/* Hero */}
      <Column
        fillWidth
        horizontal="center"
        align="center"
        gap="m"
        paddingTop="xl"
        paddingBottom="l"
      >
        <Text
         variant="label-default-m"
          style={{ color: "#18c1fd" }}
>
  DEVELOPER JOURNEY
</Text>

        <Heading
          variant="display-strong-xl"
          align="center"
        >
          My Stats
        </Heading>

        <Text
          variant="label-default-m"
          onBackground="neutral-weak"
          align="center"
          style={{ maxWidth: "650px" }}
        >
          A visual overview of my projects, technologies, certifications,
          and experience as I continue growing as a full-stack developer.
        </Text>
      </Column>

      {/* Statistics */}
      <Grid
        columns="4"
        s={{ columns: 2 }}
        gap="m"
        fillWidth
      >
        {stats.map((stat) => (
          <Card
            key={stat.label}
            fillWidth
            padding="xl"
            radius="l"
            style={{
              textAlign: "center",
              transition: "transform 0.2s ease",
            }}
          >
            <Column
              fillWidth
              horizontal="center"
              align="center"
              gap="m"
            >
                <Icon
                  name={stat.icon}
                  size="l"
                  onBackground="accent-weak"
                />

              <Column
                horizontal="center"
                align="center"
                gap="xs"
              >
                <Heading variant="display-strong-l">
                  {stat.value}
                </Heading>

                <Text variant="heading-strong-m">
                  {stat.label}
                </Text>

                <Text
                  variant="body-default-s"
                  onBackground="neutral-weak"
                  align="center"
                >
                  {stat.description}
                </Text>
              </Column>
            </Column>
          </Card>
        ))}
      </Grid>

      {/* Technology section */}
      <Column
        fillWidth
        horizontal="center"
        align="center"
        gap="l"
        paddingTop="l"
      >
        <Column
          horizontal="center"
          align="center"
          gap="s"
        >
          <Text
            variant="label-default-m"
          style={{ color: "#18c1fd" }}
          >
            TECH STACK
          </Text>

          <Heading
            variant="heading-strong-xl"
            align="center"
          >
            Technologies I Work With
          </Heading>

          <Text
            variant="body-default-s"
            onBackground="neutral-weak"
            align="center"
          >
            Tools and technologies I use to build modern web applications.
          </Text>
        </Column>


          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "24px",
              paddingTop: "25px",
            }}
          >
          {technologies.map((technology) => {
            const Icon = technology.icon;
            return (
              <div
                style={{
                  padding:"8px 16px",
                  display: "flex",
                  alignItems: "center",
                   gap: "8px",
            }}>
              <Icon size={22} />
              <Text variant="body-strong-m"
              >{technology.name}</Text>
            </div>
          )
          })}
          </div>
      </Column>

      {/* Projects */}
      <Column
        fillWidth
        gap="l"
        paddingTop="l"
      >
        <Column
          horizontal="center"
          align="center"
          gap="s"
        >
          <Text
            variant="label-default-m"
            style={{ color: "#18c1fd" }}
          >
            PROJECTS
          </Text>

          <Heading
            variant="heading-strong-xl"
            align="center"
          >
            What I've Been Building
          </Heading>

          <Text
            variant="body-default-s"
            onBackground="neutral-weak"
            align="center"
          >
            Different types of projects I've worked on during my learning journey.
          </Text>
        </Column>

        <Grid
          columns="2"
          style={{ color: "#18c1fd" }}
          s={{ columns: 1 }}
          gap="m"
          fillWidth
        >
          {projects.map((project) => (
            <Card
              key={project.number}
              fillWidth
              padding="xl"
              radius="l"
            >
              <Column gap="l">
                <Row
                  horizontal="between"
                  vertical="center"
                >
                  <Text
                     variant="label-default-m"
                     style={{ color: "#18c1fd" }}
                  >
                    {project.number}
                  </Text>

                  <Icon
                    name="arrow-up-right"
                    onBackground="neutral-weak"
                  />
                </Row>

                <Column gap="s">
                  <Heading variant="heading-strong-l">
                    {project.title}
                  </Heading>

                  <Text onBackground="neutral-weak">
                    {project.description}
                  </Text>
                </Column>
              </Column>
            </Card>
          ))}
        </Grid>
      </Column>

      {/* Certifications */}
     
      <Column
        fillWidth
        horizontal="center"
        align="center"
        gap="l"
        paddingTop="l"
      >
        <Column
          horizontal="center"
          align="center"
          gap="s"
        >
          <Text
            variant="label-default-m"
            style={{ color: "#18c1fd" }}
          >
            LEARNING
          </Text>

          <Heading
            variant="heading-strong-xl"
            align="center"
          >
            Certifications
          </Heading>
        </Column>

        <Column
          fillWidth
          gap="m"
        >
          {certificates.map((certificate) => (
            <Card
              key={certificate.title}
              fillWidth
              padding="xl"
              radius="l"
            >
              <Row
                vertical="center"
                gap="l"
              >
                  <Icon
                    name="certificate"
                    size="l"
                    onBackground="accent-weak"
                  />

                <Column gap="xs">
                  <Heading variant="heading-strong-l">
                    {certificate.title}
                  </Heading>

                  <Text
                    variant="label-default-m"
                    style={{ color: "#18c1fd" }}
                  >
                    {certificate.provider}
                  </Text>

                  <Text onBackground="neutral-weak">
                    {certificate.description}
                  </Text>
                </Column>
              </Row>
            </Card>
          ))}
        </Column>
      </Column>

      {/* Current focus */}
      <Card
        fillWidth
        padding="xl"
        radius="l"
        style={{
          marginTop: "var(--static-space-xl)",
        }}
      >
        <Column
          fillWidth
          horizontal="center"
          align="center"
          gap="m"
        >
          <Text
             variant="label-default-m"
             style={{ color: "#18c1fd" }}
          >
            CURRENTLY BUILDING
          </Text>

          <Heading
            variant="heading-strong-xl"
            align="center"
          >
            Becoming a Full-Stack Developer
          </Heading>

          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
            style={{ maxWidth: "700px" }}
          >
            Currently focused on building full-stack applications with
            Next.js and PostgreSQL, strengthening my React and JavaScript
            skills, and gaining practical industry experience.
          </Text>
        </Column>
      </Card>
    </Column>
  );
}


