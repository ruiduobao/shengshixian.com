<template>
  <div class="ctamap-download">
    <div class="ctamap-top">
      <p class="ctamap-version">CTAmap v2.0（2026-09-01）· 2000–2026 年 · 省 / 市 / 县三级 · CC BY 4.0 · DOI: <a href="https://doi.org/10.5281/zenodo.22179207" target="_blank" rel="noopener">10.5281/zenodo.22179207</a></p>
      <p class="ctamap-note">每年快照为该年 1 月 1 日 00:00 的状态（即上一年末），坐标系 WGS 84（EPSG:4326）。在下方选择格式后，点击任意年份即直接下载该年份数据，无需网盘、无提取码。全部文件托管于 Cloudflare R2（国内可直连）；数据集同时存档于 Zenodo（见上方 DOI）。GeoPackage 按省 / 市 / 县分文件，Shapefile 为该年三级合包。</p>
      <div class="ctamap-format">
        <span>格式：</span>
        <button :class="{active: format === 'gpkg'}" @click="format = 'gpkg'">GeoPackage</button>
        <button :class="{active: format === 'shp'}" @click="format = 'shp'">Shapefile</button>
      </div>
      <div class="ctamap-bundles">
        <span>附表与文档：</span>
        <a :href="releaseBase + 'tables.zip'">事件表 tables.zip（调整事件 / 批文索引 / 数据字典）</a>
        <a :href="releaseBase + 'logs.zip'">变更文档 logs.zip（逐年变更说明与校验值）</a>
      </div>
    </div>
    <div class="ctamap-grid">
      <div class="ctamap-card" v-for="y in years" :key="y.year">
        <img :src="releaseBase + 'ctamap-' + y.year + '.png'" :alt="y.year + ' 年县级边界预览图'" loading="lazy" />
        <h3>{{ y.year }} 年</h3>
        <p class="ctamap-count">县级 {{ y.county }} 个 · 省级 34 个</p>
        <div v-if="format === 'gpkg'" class="ctamap-links">
          <a :href="releaseBase + y.gpkgProvince">省 {{ y.gpkgProvinceSize }}</a>
          <a :href="releaseBase + y.gpkgPrefecture">市 {{ y.gpkgPrefectureSize }}</a>
          <a :href="releaseBase + y.gpkgCounty">县 {{ y.gpkgCountySize }}</a>
        </div>
        <div v-else class="ctamap-links">
          <a :href="releaseBase + y.shpFile">省 / 市 / 县三级 {{ y.shpSize }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CtamapDownload',
  data() {
    return {
      format: 'gpkg',
      releaseBase: 'https://pub-480fcfcea00742058bae6bc1c86d288c.r2.dev/',
      years: [
        {"year": 2026, "county": 2854, "gpkgProvince": "T2026_province.gpkg", "gpkgPrefecture": "T2026_prefecture.gpkg", "gpkgCounty": "T2026_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "64 MB", "shpFile": "shp_T2026.zip", "shpSize": "76 MB"},
        {"year": 2025, "county": 2855, "gpkgProvince": "T2025_province.gpkg", "gpkgPrefecture": "T2025_prefecture.gpkg", "gpkgCounty": "T2025_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "64 MB", "shpFile": "shp_T2025.zip", "shpSize": "76 MB"},
        {"year": 2024, "county": 2853, "gpkgProvince": "T2024_province.gpkg", "gpkgPrefecture": "T2024_prefecture.gpkg", "gpkgCounty": "T2024_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "64 MB", "shpFile": "shp_T2024.zip", "shpSize": "76 MB"},
        {"year": 2023, "county": 2852, "gpkgProvince": "T2023_province.gpkg", "gpkgPrefecture": "T2023_prefecture.gpkg", "gpkgCounty": "T2023_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "64 MB", "shpFile": "shp_T2023.zip", "shpSize": "76 MB"},
        {"year": 2022, "county": 2852, "gpkgProvince": "T2022_province.gpkg", "gpkgPrefecture": "T2022_prefecture.gpkg", "gpkgCounty": "T2022_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "63 MB", "shpFile": "shp_T2022.zip", "shpSize": "76 MB"},
        {"year": 2021, "county": 2853, "gpkgProvince": "T2021_province.gpkg", "gpkgPrefecture": "T2021_prefecture.gpkg", "gpkgCounty": "T2021_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "63 MB", "shpFile": "shp_T2021.zip", "shpSize": "76 MB"},
        {"year": 2020, "county": 2856, "gpkgProvince": "T2020_province.gpkg", "gpkgPrefecture": "T2020_prefecture.gpkg", "gpkgCounty": "T2020_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "63 MB", "shpFile": "shp_T2020.zip", "shpSize": "76 MB"},
        {"year": 2019, "county": 2861, "gpkgProvince": "T2019_province.gpkg", "gpkgPrefecture": "T2019_prefecture.gpkg", "gpkgCounty": "T2019_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "63 MB", "shpFile": "shp_T2019.zip", "shpSize": "76 MB"},
        {"year": 2018, "county": 2861, "gpkgProvince": "T2018_province.gpkg", "gpkgPrefecture": "T2018_prefecture.gpkg", "gpkgCounty": "T2018_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "63 MB", "shpFile": "shp_T2018.zip", "shpSize": "76 MB"},
        {"year": 2017, "county": 2861, "gpkgProvince": "T2017_province.gpkg", "gpkgPrefecture": "T2017_prefecture.gpkg", "gpkgCounty": "T2017_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "63 MB", "shpFile": "shp_T2017.zip", "shpSize": "76 MB"},
        {"year": 2016, "county": 2860, "gpkgProvince": "T2016_province.gpkg", "gpkgPrefecture": "T2016_prefecture.gpkg", "gpkgCounty": "T2016_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "63 MB", "shpFile": "shp_T2016.zip", "shpSize": "76 MB"},
        {"year": 2015, "county": 2863, "gpkgProvince": "T2015_province.gpkg", "gpkgPrefecture": "T2015_prefecture.gpkg", "gpkgCounty": "T2015_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "63 MB", "shpFile": "shp_T2015.zip", "shpSize": "75 MB"},
        {"year": 2014, "county": 2863, "gpkgProvince": "T2014_province.gpkg", "gpkgPrefecture": "T2014_prefecture.gpkg", "gpkgCounty": "T2014_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "63 MB", "shpFile": "shp_T2014.zip", "shpSize": "75 MB"},
        {"year": 2013, "county": 2862, "gpkgProvince": "T2013_province.gpkg", "gpkgPrefecture": "T2013_prefecture.gpkg", "gpkgCounty": "T2013_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "63 MB", "shpFile": "shp_T2013.zip", "shpSize": "75 MB"},
        {"year": 2012, "county": 2863, "gpkgProvince": "T2012_province.gpkg", "gpkgPrefecture": "T2012_prefecture.gpkg", "gpkgCounty": "T2012_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "63 MB", "shpFile": "shp_T2012.zip", "shpSize": "75 MB"},
        {"year": 2011, "county": 2866, "gpkgProvince": "T2011_province.gpkg", "gpkgPrefecture": "T2011_prefecture.gpkg", "gpkgCounty": "T2011_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "63 MB", "shpFile": "shp_T2011.zip", "shpSize": "75 MB"},
        {"year": 2010, "county": 2868, "gpkgProvince": "T2010_province.gpkg", "gpkgPrefecture": "T2010_prefecture.gpkg", "gpkgCounty": "T2010_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "63 MB", "shpFile": "shp_T2010.zip", "shpSize": "75 MB"},
        {"year": 2009, "county": 2869, "gpkgProvince": "T2009_province.gpkg", "gpkgPrefecture": "T2009_prefecture.gpkg", "gpkgCounty": "T2009_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "63 MB", "shpFile": "shp_T2009.zip", "shpSize": "75 MB"},
        {"year": 2008, "county": 2869, "gpkgProvince": "T2008_province.gpkg", "gpkgPrefecture": "T2008_prefecture.gpkg", "gpkgCounty": "T2008_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "63 MB", "shpFile": "shp_T2008.zip", "shpSize": "75 MB"},
        {"year": 2007, "county": 2870, "gpkgProvince": "T2007_province.gpkg", "gpkgPrefecture": "T2007_prefecture.gpkg", "gpkgCounty": "T2007_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "63 MB", "shpFile": "shp_T2007.zip", "shpSize": "75 MB"},
        {"year": 2006, "county": 2872, "gpkgProvince": "T2006_province.gpkg", "gpkgPrefecture": "T2006_prefecture.gpkg", "gpkgCounty": "T2006_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "63 MB", "shpFile": "shp_T2006.zip", "shpSize": "75 MB"},
        {"year": 2005, "county": 2872, "gpkgProvince": "T2005_province.gpkg", "gpkgPrefecture": "T2005_prefecture.gpkg", "gpkgCounty": "T2005_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "64 MB", "shpFile": "shp_T2005.zip", "shpSize": "76 MB"},
        {"year": 2004, "county": 2871, "gpkgProvince": "T2004_province.gpkg", "gpkgPrefecture": "T2004_prefecture.gpkg", "gpkgCounty": "T2004_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "64 MB", "shpFile": "shp_T2004.zip", "shpSize": "76 MB"},
        {"year": 2003, "county": 2873, "gpkgProvince": "T2003_province.gpkg", "gpkgPrefecture": "T2003_prefecture.gpkg", "gpkgCounty": "T2003_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "65 MB", "shpFile": "shp_T2003.zip", "shpSize": "77 MB"},
        {"year": 2002, "county": 2874, "gpkgProvince": "T2002_province.gpkg", "gpkgPrefecture": "T2002_prefecture.gpkg", "gpkgCounty": "T2002_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "65 MB", "shpFile": "shp_T2002.zip", "shpSize": "77 MB"},
        {"year": 2001, "county": 2874, "gpkgProvince": "T2001_province.gpkg", "gpkgPrefecture": "T2001_prefecture.gpkg", "gpkgCounty": "T2001_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "66 MB", "shpFile": "shp_T2001.zip", "shpSize": "78 MB"},
        {"year": 2000, "county": 2871, "gpkgProvince": "T2000_province.gpkg", "gpkgPrefecture": "T2000_prefecture.gpkg", "gpkgCounty": "T2000_county.gpkg", "gpkgProvinceSize": "11 MB", "gpkgPrefectureSize": "28 MB", "gpkgCountySize": "66 MB", "shpFile": "shp_T2000.zip", "shpSize": "78 MB"}
      ]
    }
  }
}
</script>
<style scoped>
.ctamap-top { margin-bottom: 18px; }
.ctamap-version { font-weight: 600; }
.ctamap-note, .ctamap-count { font-size: 13px; color: #64748b; }
.ctamap-format { margin: 10px 0; }
.ctamap-format button { margin-right: 8px; padding: 6px 14px; border-radius: 999px; border: 1px solid #1e3a5f; background: #fff; color: #1e3a5f; cursor: pointer; font-size: 14px; }
.ctamap-format button.active { background: #1e3a5f; color: #fff; }
.ctamap-bundles a { display: inline-block; margin: 4px 8px 0 0; font-size: 13px; }
.ctamap-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; }
.ctamap-card { border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px; background: #fff; }
.ctamap-card img { width: 100%; border-radius: 8px; display: block; }
.ctamap-card h3 { margin: 10px 0 4px; }
.ctamap-links a { display: inline-block; margin: 4px 6px 0 0; padding: 6px 10px; border-radius: 999px; background: #1e3a5f; color: #fff !important; text-decoration: none; font-size: 13px; }
.ctamap-links a:hover { background: #2b4f7e; }
</style>
