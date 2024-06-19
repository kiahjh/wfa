_default:
  @just --choose

site:
	@bun --filter 'site' dev

api:
	@bun --filter 'api' dev
