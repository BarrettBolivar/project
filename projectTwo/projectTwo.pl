#!/usr/bin/perl

use warnings;
use DBI;
use DBD::SQLite;
=for comment
RaiseError set to true for debugging and AutoCommit set to true in case additions need to be made
=cut
$dbh = DBI->connect("dbi:SQLite:static.db", "", "", {RaiseError => 1, AutoCommit => 1});
$results = $dbh->selectall_arrayref(q(select * from tableData));
foreach (@$results) { 
	foreach $i (0..$#$_) {
		print "$_->[$i] ";
	}
	print "\n";
}
