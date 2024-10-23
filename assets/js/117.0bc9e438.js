(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{623:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[t("a",{attrs:{href:"http://www.postgres.cn/docs/13/indexes.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),t("OutboundLink")],1),s._v("索引是提高数据库性能的常用途径。比起没有索引，使用索引可以让数据库服务器更快找到并获取特定行。但是索引同时也会增加数据库系统的日常管理负担，因此我们应该聪明地使用索引。")]),s._v(" "),t("p",[s._v("一旦一个索引被创建，就不再需要进一步的干预：系统会在表更新时更新索引，而且会在它觉得使用索引比顺序扫描表效率更高时使用索引。但我们可能需要定期地运行 ANALYZE 命令来更新统计信息以便查询规划器能做出正确的决定。")]),s._v(" "),t("p",[t("code",[s._v("主键 PRIMARY KEY")]),s._v(" 和 "),t("code",[s._v("唯一约束")]),s._v(" 是一个特俗的索引。不需要特俗指定索引，创建后 PostgreSQL 会自动创建一个唯一索引。")]),s._v(" "),t("p",[s._v("一个索引被创建后，系统必须保持它与表同步。这增加了数据操作的负担。因此哪些很少或从不在查询中使用的索引应该被移除。")])]),s._v(" "),t("h2",{attrs:{id:"索引类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引类型"}},[s._v("#")]),s._v(" 索引类型")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("PostgreSQL 提供了多种索引类型： B-tree、Hash、GiST、SP-GiST 、GIN 和 BRIN。每一种索引类型使用了 一种不同的算法来适应不同类型的查询。默认情况下， CREATE INDEX 命令创建适合于大部分情况的 B-tree 索引。"),t("a",{attrs:{href:"http://www.postgres.cn/docs/13/indexes-types.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"多列索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多列索引"}},[s._v("#")]),s._v(" 多列索引")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("目前，只有 B-tree、GiST、GIN 和 BRIN 索引类型支持多列索引，最多可以指定 32 个列（该限制可以在源代码文件 pg_config_manual.h 中修改，但是修改后需要重新编译 PostgreSQL）。")]),s._v(" "),t("p",[s._v("多列索引应该较少地使用。在绝大多数情况下，单列索引就足够了且能节约时间和空间。具有超过三个列的索引不太有用，除非该表的使用是极端程式化的。")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 表 test2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" test2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  info "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  major "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  minor "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 要做如下形式的查询")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" test2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" major "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" constant "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" minor "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" constant"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 我们可以在 major 和 minor 上定义一个索引")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" test2_mm_idx "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" test2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("major"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" minor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h2",{attrs:{id:"索引和-order-by"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引和-order-by"}},[s._v("#")]),s._v(" 索引和 ORDER BY")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("除了简单地查询要返回的行外，一个索引可能还需要将它们以指定的顺序传递。这使得查询中的 ORDER BY 不需要独立的排序步骤。在 PostgreSQL 当前支持的索引类型中，只有 B-tree 可以产生排序后的输出，其他索引类型会把行以一种没有指定的且与实现相关的顺序返回。")]),s._v(" "),t("p",[s._v("规划器会考虑以两种方式来满足一个 ORDER BY 说明：扫描一个符合说明的可用索引，或者先以物理顺序扫描表然后再显式排序。对于一个需要扫描表的大部分的查询，一个显式的排序很可能比使用一个索引更快，因为其顺序访问模式使得它所需要的磁盘 I/O 更少。只有在少数行需要被取出时，索引才会更有用。一种重要的特殊情况是 ORDER BY 与 LIMIT n 联合使用：一个显式的排序将会处理所有的数据来确定最前面的 n 行，但如果有一个符合 ORDER BY 的索引，前 n 行将会被直接获取且根本不需要扫描剩下的数据。")]),s._v(" "),t("p",[s._v("默认情况下，B-tree 索引将它的项以升序方式存储，并将空值放在最后(表 TID 被处理为其它相等条目之间的分线器列)。这意味着对列 x 上索引的一次前向扫描将产生满足 ORDER BY x（或者更长的形式：ORDER BY x ASC NULLS LAST）的结果。索引也可以被后向扫描，产生满足 ORDER BY x DESC（ORDER BY x DESC NULLS FIRST， NULLS FIRST 是 ORDER BY DESC 的默认情况）。")]),s._v(" "),t("p",[s._v("我们可以在创建 B-tree 索引时通过 ASC、DESC、NULLS FIRST 和 NULLS LAST 选项来改变索引的排序")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 一个以升序存储且将空值前置的索引可以根据扫描方向来支持ORDER BY x ASC NULLS FIRST或 ORDER BY x DESC NULLS LAST。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" test2_info_nulls_low "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" test2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("info NULLS "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FIRST")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" test2_id_desc_index "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" test2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v(" NULLS "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LAST")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"组合多个索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组合多个索引"}},[s._v("#")]),s._v(" 组合多个索引")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("只有查询子句中在索引列上使用了索引操作符类中的操作符并且通过 AND 连接时才能使用单一索引。例如，给定一个(a, b) 上的索引，查询条件 WHERE a = 5 AND b = 6 可以使用该索引，而查询 WHERE a = 5 OR b = 6 不能直接使用该索引。")]),s._v(" "),t("p",[s._v("幸运的是，PostgreSQL 具有组合多个索引（包括多次使用同一个索引）的能力来处理那些不能用单个索引扫描实现的情况。系统能在多个索引扫描之间安排 AND 和 OR 条件。例如， WHERE x = 42 OR x = 47 OR x = 53 OR x = 99 这样一个查询可以被分解成为四个独立的在 x 上索引扫描，每一个扫描使用其中一个条件。这些查询的结果将被“或”起来形成最后的结果。另一个例子是如果我们在 x 和 y 上都有独立的索引，WHERE x = 5 AND y = 6 这样的查询的一种可能的实现方式就是分别使用两个索引配合相应的条件，然后将结果“与”起来得到最后的结果行。")]),s._v(" "),t("p",[s._v("为了组合多个索引，系统扫描每一个所需的索引并在内存中准备一个位图用于指示表中符合索引条件的行的位置。然后这些位图会被根据查询的需要“与”和“或”起来。最后，实际的表行将被访问并返回。表行将被以物理顺序访问，因为位图就是以这种顺序布局的。这意味着原始索引中的任何排序都会被丢失，并且如果存在一个 ORDER BY 子句就需要一个单独的排序步骤。由于这个原因以及每一个附加的索引都需要额外的时间，即使有额外的索引可用，规划器有时也会选择使用单一索引扫描。")]),s._v(" "),t("p",[s._v("有时候多列索引最好，但是有时更好的选择是创建单独的索引并依赖于索引组合特性。例如，如果我们的查询中有时只涉及到列 x，有时候只涉及到列 y，还有时候会同时涉及到两列，我们可以选择在 x 和 y 上创建两个独立索引然后依赖索引组合来处理同时涉及到两列的查询。我们当然也可以创建一个(x, y)上的多列索引。当查询同时涉及到两列时，该索引会比组合索引效率更高，它在只涉及到 y 的查询中几乎完全无用，因此它不能是唯一的一个索引。一个多列索引和一个 y 上的独立索引的组合将会工作得很好。多列索引可以用于那些只涉及到 x 的查询，尽管它比 x 上的独立索引更大且更慢。最后一种选择是创建所有三个索引，但是这种选择最适合表经常被执行所有三种查询但是很少被更新的情况。如果其中一种查询要明显少于其他类型的查询，我们可能需要只为常见类型的查询创建两个索引。")])]),s._v(" "),t("h2",{attrs:{id:"唯一索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#唯一索引"}},[s._v("#")]),s._v(" 唯一索引")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("索引也可以被用来强制列值的唯一性，或者是多个列组合值的唯一性。")]),s._v(" "),t("p",[s._v("当前，只有 B-tree 能够被声明为唯一。")]),s._v(" "),t("p",[s._v("当一个索引被声明为唯一时，索引中不允许多个表行具有相同的索引值。空值被视为不相同。一个多列唯一索引将会拒绝在所有索引列上具有相同组合值的表行。")]),s._v(" "),t("p",[s._v("PostgreSQL 会自动为定义了一个"),t("code",[s._v("唯一约束")]),s._v("或"),t("code",[s._v("主键")]),s._v("的表创建一个唯一索引。该索引包含组成主键或唯一约束的所有列（可能是一个多列索引），它也是用于强制这些约束的机制。")]),s._v(" "),t("p",[s._v("不需要手工在唯一列上创建索引，如果那样做也只是重复了自动创建的索引而已。")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNIQUE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" test2_unique_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" test2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"检查索引使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查索引使用"}},[s._v("#")]),s._v(" 检查索引使用")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("尽管 PostgreSQL 中的索引并不需要维护或调优，但是检查真实的查询负载实际使用了哪些索引仍然非常重要。检查一个独立查询的索引使用情况可以使用 EXPLAIN 命令。也可以在一个运行中的服务器上收集有关索引使用的总体统计情况。"),t("a",{attrs:{href:"http://www.postgres.cn/docs/13/indexes-examine.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"删除索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除索引"}},[s._v("#")]),s._v(" 删除索引")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" test2_unique_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);