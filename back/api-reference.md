# Api参考

::: info 介绍
Api接口
:::

## 中英文翻译

```java
	/**
	 * https://api.66mz8.com/api/translation.php?info=我来自中国
	 *
	 * { "code": 200, "info": "我来自中国", "fanyi": "I come from China" }
	 */
	public static String translate_0(String word) {
		try {
			String s = translates.get(word);
			if (s != null) {
				return s;
			}
			UriComponents uriComponents = UriComponentsBuilder.newInstance().scheme("https").host("api.66mz8.com")
					.path("/api/translation.php").query("info=" + word).build();
			Map map = HttpRestUtil.getHttp(uriComponents, Map.class);
			if ("200".equals(map.get("code").toString())) {
				translates.put(word, map.get("fanyi").toString());
				return map.get("fanyi").toString();
			}
		}
		catch (Exception e) {
			log.error("翻译：" + word + " 失败！", e);
		}
		return word;
	}

	/**
	 * https://fanyi.youdao.com/translate?&doctype=json&type=AUTO&i=周娟
	 *
	 * { "type": "ZH_CN2EN", "errorCode": 0, "elapsedTime": 4, "translateResult": [ [ {
	 * "src": "周娟", "tgt": "skillful" } ] ] }
	 */
	public static String translate_1(String word) {
		try {
			String s = translates.get(word);
			if (s != null) {
				return s;
			}
			UriComponents uriComponents = UriComponentsBuilder.newInstance().scheme("https").host("fanyi.youdao.com")
					.path("/translate").query("doctype=json&type=AUTO&i=" + word).build();
			Map map = HttpRestUtil.getHttp(uriComponents, Map.class);
			if ("0".equals(map.get("errorCode").toString())) {
				String fanyi = ((List<List<Map<String, String>>>) (map.get("translateResult"))).get(0).get(0)
						.get("tgt");
				translates.put(word, fanyi);
				return fanyi;
			}
		}
		catch (Exception e) {
			log.error("翻译：" + word + " 失败！", e);
		}
		return word;
	}
```
