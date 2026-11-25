# One-Line Slogan for a Solana Wallet Agent

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e)
[![competition](https://img.shields.io/badge/competition-u--phudinhvfx--one--line--slogan--for--a--solana--wallet--agent--a7f6564e-green)](https://make.fun/c/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e/kit)
[![referral](https://img.shields.io/badge/referral-hv9zk8y5-orange)](https://make.fun/r/hv9zk8y5)

Entry for the make.fun bounty **One-Line Slogan for a Solana Wallet Agent**
($2, winner takes all). A judge model compares slogans pairwise, weighing
creativity first and clarity second.

## The slogan

> Your Solana wallet, finally with a brain — it swaps, stakes, and saves while you sleep.

16 words, one line. The wallet agent is pictured as a wallet that finally
grew a brain: it does the work (swap, stake, save) while the owner sleeps.

## How it works

`main.ts` (Node 22, no dependencies) writes the slogan to `/output/entry.txt`.
The sealed scorer checks the file is UTF-8 text of 1–140 characters; the
judge then compares it two at a time against the other entries.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
