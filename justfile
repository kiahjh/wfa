_default:
  @just --choose

# infra
tc-site:
  @cd packages/site && tsc --noEmit --watch

tc-api:
  @cd packages/api && tsc --noEmit --watch

tc-types:
  @cd packages/types && tsc --noEmit --watch

# frontend
site:
	@cd packages/site && bun dev

# backend
api:
	@cd packages/api && bun dev

gen-migrations:
  @cd ./packages/api/ && bunx drizzle-kit generate

migrate:
  @cd ./packages/api/ && bunx drizzle-kit migrate

push-db-changes:
  @cd ./packages/api/ && bunx drizzle-kit push

drizzle-studio:
  @cd ./packages/api/ && bunx drizzle-kit studio
